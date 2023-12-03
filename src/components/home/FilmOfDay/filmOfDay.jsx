import s from './filmOfDay.module.css';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {amber, purple} from '@mui/material/colors';
import Button from "@mui/material/Button";
import YouTube from 'react-youtube';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});

const FilmOfDay = (props) => {
    return (
        <div className={s.movie_info__container}>
            <h2 className={s.movie_name}>{props.title}</h2>
            <div className={s.movie_info__block}>
                <ThemeProvider theme={theme}>
                    <div className={s.movie_info__section} >
                        <div className={s.movie}>
                            <div className={s.movie_text}>
                                <p>Дата выхода: {props.releaseDate}</p>
                                <p>Количество серий: {props.episodeCount}</p>

                                <p>Краткое описание:</p>
                                <p className={s.movie_description}>{props.description}</p>
                                <Button className={s.movie_button} variant="outlined">{props.button}</Button>
                            </div>

                            <img className={s.movie__img} src="https://aquamarin-school.ru/uploads/blog/uroki/vinni-puh-kartinka/vinni-puh-kartinka.jpg"
                                 alt="Изображение"/>
                        </div>
                    </div>
                </ThemeProvider>
            </div>

        </div>
    );
};

export default FilmOfDay;