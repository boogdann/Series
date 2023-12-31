import s from './filmOfDay.module.css';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {amber, purple} from '@mui/material/colors';
import Button from "@mui/material/Button";
import YouTube from 'react-youtube';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});

const FilmOfDay = (props) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={s.movie_info__container}>
            <h2 className={s.movie_name}>{props.title}</h2>
            <div className={s.movie_info__block}>
                <ThemeProvider theme={theme}>
                    <div className={s.movie_info__section} >
                        <div className={s.movie + " d-flex flex-column"}>
                            <div className={s.main_info}>
                                <img
                                    src={"https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg"}
                                    alt={"serial photo"}
                                />
                                <div className={s.main_info_text}>
                                    { i18n.language !== 'en' ?
                                    <div className={s.main_text}>
                                        <p>{ t('home.date') } 24.09.2007</p>
                                        <p>{ t('home.count') } 12</p>

                                        <p>
                                            «Теория Большого взрыва» — американский ситком,
                                            созданный Чаком Лорри и Биллом Прэди, которые наряду со Стивеном Моларо являлись
                                            главными сценаристами телешоу.
                                        </p>
                                        <p>Премьера сериала состоялась 24 сентября 2007 года на
                                        канале CBS, а показ финального сезона завершился 16 мая 2019 года.</p>
                                    </div> :
                                    <div className={s.main_text}>
                                        <p>{ t('home.date') } 24.09.2007</p>
                                        <p>{ t('home.count') } 12</p>
                                        <p>
                                            "The Big Bang Theory" is an American sitcom
                                            created by Chuck Lorre and Bill Prady, who along with Steven Molaro were
                                            main scriptwriters for TV shows.
                                        </p>
                                        <p>
                                            The series premiered on September 24, 2007.
                                            channel CBS, and the final season ended on May 16, 2019.
                                        </p>
                                        </div>
                                    }
                                    <NavLink to={"/daylyFilm/1"}><Button className={s.movie_button} variant="outlined">{props.button}</Button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </div>

        </div>
    );
};

export default FilmOfDay;


//                    <div className={s.movie_text}>
//
//
//                                 <p>Краткое описание:</p>
//                                 <p className={s.movie_description}>{props.description}</p>
//
//                             </div>