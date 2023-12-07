import React from 'react';
import YouTube from "react-youtube";
import s from './trailer.module.css';
import {useTranslation} from "react-i18next";
import {Card, CardContent} from "@mui/material";

const Trailer = (props) => {
    const {t} = useTranslation();

    return (
        <div className={s.trailer__container}>
            <h2 className={s.trailer__title}>{t('trailer.title')}</h2>
            <div className={s.trailer__block}>
                <CardContent className={s.trailer__content}>
                    <YouTube className={s.trailer__youtube} videoId={props.trailerID}/>
                </CardContent>
            </div>
        </div>
    );
};

export default Trailer;