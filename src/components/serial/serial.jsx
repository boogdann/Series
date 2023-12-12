import Header from "../utils/header/header";
import * as React from "react";
import Footer from "../utils/footer/footer";
import Map from "../utils/map/map";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {GetSerias} from "../../data/serials";
import Title from "../home/Title/title";
import s from "./serial.module.css";
import Trailer from "../home/Trailer/trailer";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {amber, purple} from "@mui/material/colors";
import {Carousel} from 'react-responsive-carousel';
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";

const apiKey = 'YOUR_API_KEY';

const WrappedMap = withScriptjs(withGoogleMap(Map));

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});


function Serial() {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    let data = GetSerias(i18n.language === 'en')


    let ItemsArr = data[id-1].Photos.map((e) => {
        return (
            <div>
                <img src={e} alt={e}/>
            </div>
        )
    })
    return (
        <div>
            <Header/>
            <Title
                title={data[id - 1].Name}
                content={
                    i18n.language === 'en' ? `The series "${data[id - 1].Name}" takes ${data[id - 1].id}th place on our list. Details below!`
                        : `Сериал "${data[id - 1].Name}" занимает ${data[id - 1].id}-ое место в нашем списке. Подробности ниже!`
                }
                button=""
                image={data[id - 1].Photo}
            />

            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.SerialInfo}>
                        <h3><span className={s.item}>Основная информация:</span></h3>
                        <p>{data[id - 1].Description}</p>
                        <p><span className={s.item}>Период выпуска: </span>{data[id - 1].Dates}</p>
                        <p><span className={s.item}>Количество сезонов: </span>{data[id - 1].SizonCount}</p>
                    </div>
                    <div className={s.Map}>
                        <h3 className={s.map_text}>{data[id - 1].MapInfo}</h3>
                        <Map map={data[id - 1].Map}/>
                    </div>
                </div>
            </div>

            <div className={s.container}>
                <ThemeProvider theme={theme}>
                    <div className={s.wrapper}>
                        <Carousel className={s.Slider}>
                            {ItemsArr}
                        </Carousel>
                    </div>
                </ThemeProvider>
            </div>

            <Trailer
                trailerID={data[id - 1].Video}/>

            <Footer />
        </div>
    );
}

//
export default Serial;
