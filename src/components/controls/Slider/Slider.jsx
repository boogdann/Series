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

function Slider({images, text, names, links}) {
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

    const handleLinkClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className={s.slider__container}>
            <h2 className={s.slider__title}>Сериалы</h2>
            <div className={s.slider__block}>
                <ThemeProvider theme={theme}>
                    <Button variant="outlined" onClick={handlePrevClick}>Назад</Button>
                    <div className={s.slider__data}>
                        <Card className={s.slider__image}>
                            <img onClick={ () => handleLinkClick(links[currentImageIndex])}
                                 src={images[currentImageIndex]} alt="Изображение"
                            />
                        </Card>
                        <p className={s.slider__name}>{names[currentImageIndex]}</p>
                        <p className={s.slider__text}>{text[currentImageIndex]}</p>
                    </div>
                    <Button variant="outlined" onClick={handleNextClick}>Вперед</Button>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Slider;