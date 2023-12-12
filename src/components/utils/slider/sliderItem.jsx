import React, {useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import s from './slider.module.css'
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {amber, purple} from "@mui/material/colors";
import {NavLink} from "react-router-dom";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});

const SliderItem = (props) => {

    let ItemsArr = props.data.map((e) => {
        return (
            <div>
                <p className={s.Name}>{e.Name}</p>
                <img src={e.Photo} alt={e.Name}/>
                <NavLink to={"/serial/"+e.id}>
                <Button className={s.movie_button} variant="outlined">
                    Узнать подробнее
                </Button>
                </NavLink>
            </div>
        )
    })


    return (
        <div className={s.container}>
            <ThemeProvider theme={theme}>
            <div className={s.wrapper}>
                <Carousel className={s.Slider}>
                    {ItemsArr}
                </Carousel>
            </div>
            </ThemeProvider>
        </div>

    )
        ;
};

export default SliderItem;
