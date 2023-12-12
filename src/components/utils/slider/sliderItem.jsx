import React, {useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import s from './slider.module.css'
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {amber, purple} from "@mui/material/colors";
import {NavLink} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            backgroundColor: '#444',
        },
    },
}));

const GetItemsArr = (props, name) => {
    return props.data.filter((e) => e.Name.includes(name)).map((e) => {
        return (
            <div>
                <p className={s.Name}>{e.Name}</p>
                <img src={e.Photo} alt={e.Name}/>
                <NavLink to={"/serial/"+e.id} className={s.movie_button}>
                    <Button  variant="outlined">
                        Узнать подробнее
                    </Button>
                </NavLink>
            </div>
        )
    })
}

const SliderItem = (props) => {

    const [name, setName] = useState("");

    let ItemsArr = GetItemsArr(props, name)


    const handleSubmit = (event) => {
        ItemsArr = GetItemsArr(props, name)
        event.preventDefault();
        setName("");
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };


    const classes = useStyles();
    return (
        <div className={s.container}>
            <ThemeProvider theme={theme}>
                <div className={s.Search}>
                    <span className={s.SearchLable}>Поиск: </span>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="Название сериала"
                            variant="outlined"
                            InputProps={{
                                style: {
                                    color: '#777', // Здесь можно указать желаемый цвет текста
                                },
                            }}
                            value={name}
                            onChange={handleChange}
                        />
                    </form>
                    <IconButton onClick={handleSubmit} color="primary" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
                <div className={s.wrapper}>
                    {ItemsArr.length > 0 ?
                        <Carousel className={s.Slider}>
                            {ItemsArr}
                        </Carousel>
                        : <p style={{color:"#777"}}>Сериалы с таким именем не найдены...</p>
                    }


                    </div>
            </ThemeProvider>
        </div>

)
;
};

export default SliderItem;
