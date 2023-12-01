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
            <ThemeProvider theme={theme}>
                <div className={s.movie_info__section}>
                    <h2>{props.title}</h2>
                    <p>Дата выхода: {props.releaseDate}</p>
                    <p>Количество серий: {props.episodeCount}</p>

                    <p>Ещё что-нибудь</p>

                    <p>Трейлер:</p>
                    <YouTube className={s.section__youtube} videoId={props.trailerID}/>

                    <Button variant="outlined">{props.button}</Button>
                </div>
                <img className={s.section__img} src="../../../../assets/img/right_title_logo.jpg"
                     alt="Изображение"/>
            </ThemeProvider>
        </div>
    );
};

export default FilmOfDay;