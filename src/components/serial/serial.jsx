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
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const apiKey = 'YOUR_API_KEY';

const WrappedMap = withScriptjs(withGoogleMap(Map));

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: amber,
        secondary: purple,
    },
});

function Serial(props) {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    let data = GetSerias(i18n.language === 'en', props.isFilmOfTheDay)


    let ItemsArr = data[id-1].Photos.map((e) => {
        return (
            <div>
                <img src={e} alt={e}/>
            </div>
        )
    })

    let TimelineItems = data[id - 1].Timeline.map((e) => {
        return (
            <TimelineItem
                key="001"
                dateText={e.Time}
                dateInnerStyle={{ background: '#76bb7f', color: '#111' }}
                bodyContainerStyle={{
                    background: '#888',
                    color: '#111',
                    padding: '20px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <p>
                    {e.Text}
                </p>
            </TimelineItem>
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
                        <h3><span className={s.Hitem}>{t('serial.main_info')}</span></h3>
                        <p>{data[id - 1].Description}</p>
                        <p><span className={s.item}>{t('serial.period_label')}</span>{data[id - 1].Dates}</p>
                        <p><span className={s.item}>{t('serial.sizon_count')}</span>{data[id - 1].SizonCount}</p>
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

            <div className={s.container}>
                <div className={s.TimeLineWrapper}>
                    <h3 className={s.TimeLineHeader}>{t('serial.timeline')}</h3>
                    <Timeline lineColor={'#777'}>
                        {TimelineItems}
                    </Timeline>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

//
export default Serial;
