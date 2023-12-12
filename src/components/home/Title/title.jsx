import React from 'react';
import s from './title.module.css';
import Button from '@mui/material/Button';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {amber, purple} from '@mui/material/colors';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});

const Title = (props) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={s.section__container}>
            <ThemeProvider theme={theme}>
                <div className={s.container}>
                    <div className={s.section__data}>
                            <h2 className={s.section__title}>
                                {props.title}
                            </h2>
                        {props.content !== "" ? <p className={s.section__text}>{props.content}</p> :
                             i18n.language !== 'en' ?
                            <p className={s.section__text}>
                                <p>
                                Добро пожаловать на наш сайт, посвященный самым длинным сериалам в истории кинематографа.
                                Здесь вы найдете информацию о сериалах, которые привлекают внимание своей продолжительностью и
                                превосходят ожидания зрителей.</p>
                                <p>Наша команда исследователей собрала для вас подробную информацию о сериалах,
                                которые выделяются своей продолжительностью, включая общую длительность сериала,
                                количество сезонов и эпизодов, а также интересные факты о создании и производстве этих сериалов.</p>
                                <p>Погрузитесь в мир длительных эпических приключений и наслаждайтесь просмотром!</p>
                            </p> :
                            <p className={s.section__text}>
                                <p>
                                    Welcome to our site dedicated to the longest series in the history of cinema.
                                    Here you will find information about TV series that attract attention due to their length and
                                    exceed the expectations of the audience.
                                </p>
                                <p>
                                    Our team of researchers has collected detailed information about the series for you,
                                    which stand out for their duration, including the total duration of the series,
                                    the number of seasons and episodes, as well as interesting facts about the creation and production of these series.
                                </p>
                                <p>Immerse yourself in a world of long-lasting epic adventures and enjoy watching!</p>
                            </p>
                        }
                        { !props.image ? <></> : <img src={props.image}></img> }

                        { props.button === "" ? <></> : <NavLink to={"/Films"}><Button variant="outlined">{props.button}</Button></NavLink>}

                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Title;