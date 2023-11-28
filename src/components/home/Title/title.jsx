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
        <div className={s.section}>
            <ThemeProvider theme={theme}>
                <div className={s.section__container}>
                    <h2 className={s.section__title}>
                        {props.title}
                    </h2>
                    <p className={s.section__content}>
                        {props.content}
                    </p>
                    <Button variant="outlined">{props.button}</Button>
                    <img className={s.section__img} src="../../../../assets/img/right_title_logo.jpg" alt="Изображение" />
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Title;