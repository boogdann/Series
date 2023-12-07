import React from 'react';
import YouTube from "react-youtube";
import s from './trailer.module.css';
import {useTranslation} from "react-i18next";

const Trailer = (props) => {
    const {t} = useTranslation();

    return (
        <div className={s.trailer__container}>
            <h2 className={s.trailer__title}>{t('trailer.title')}</h2>
            <div className={s.trailer__block}>
                <YouTube className={s.trailer__youtube} videoId={props.trailerID}/>
            </div>

        </div>
    );
};

export default Trailer;