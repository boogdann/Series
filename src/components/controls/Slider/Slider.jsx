import React, { useState } from 'react';
import {Card} from "@mui/material";

function Slider({images, text}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        if (currentImageIndex === 0) {
            return;
        }
        setCurrentImageIndex((prevIndex) => prevIndex - 1);
    };

    const handleNextClick = () => {
        if (currentImageIndex === images.length - 1) {
            return;
        }
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div>
            <img src="../../../../assets/img/1.jpg" alt="Изображение"/>
            <button onClick={handlePrevClick}>Назад</button>
            <Card >
                <img src={images[currentImageIndex]} alt="Изображение"/>
            </Card>

            <button onClick={handleNextClick}>Вперед</button>
        </div>
    );
}

export default Slider;