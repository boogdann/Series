import React from 'react';
import s from './title.module.css';
import Button from '@mui/material/Button';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {amber, purple} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});

const Title = (props) => {
    return (
        <div className={s.section__container}>
            <ThemeProvider theme={theme}>
                <div className={s.container}>
                    <div className={s.section__data}>
                            <h2 className={s.section__title}>
                                {props.title}
                            </h2>
                        {props.content !== "" ? <p className={s.section__text}>{props.content}</p> :
                            <p className={s.section__text}>
                                <p>
                                Добро пожаловать на наш сайт, посвященный самым длинным сериалам в истории кинематографа.
                                Здесь вы найдете информацию о сериалах, которые привлекают внимание своей продолжительностью и
                                превосходят ожидания зрителей.</p>
                                <p>Наша команда исследователей собрала для вас подробную информацию о сериалах,
                                которые выделяются своей продолжительностью, включая общую длительность сериала,
                                количество сезонов и эпизодов, а также интересные факты о создании и производстве этих сериалов.</p>
                                <p>Погрузитесь в мир длительных эпических приключений и наслаждайтесь просмотром!</p>
                            </p>
                        }
                        { !props.image ? <></> : <img src={props.image}></img> }

                        { props.button === "" ? <></> : <Button variant="outlined">{props.button}</Button>}

                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Title;