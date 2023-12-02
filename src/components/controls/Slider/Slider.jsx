import React, {useState} from 'react';
import {Card} from "@mui/material";

import s from './Slider.module.css';
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {amber, purple} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});

function Slider({images, text}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handlePrevClick = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
            return;
        }

        setCurrentImageIndex((prevIndex) => prevIndex - 1);
    };

    const handleNextClick = () => {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0);
            return;
        }

        setCurrentImageIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div className={s.slider__container}>
            <ThemeProvider theme={theme}>
                <Button variant="outlined" onClick={handlePrevClick}>Назад</Button>
                <div className={s.slider__block}>
                    <Card className={s.slider__image}>
                        <img src={images[currentImageIndex]} alt="Изображение"/>
                    </Card>
                    <p className={s.slider__text}>{text[currentImageIndex]}</p>
                </div>
                <Button variant="outlined" onClick={handleNextClick}>Вперед</Button>
            </ThemeProvider>
        </div>
    );
}

export default Slider;