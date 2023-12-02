import React from 'react';
import YouTube from "react-youtube";
import s from './trailer.module.css';

const Trailer = (props) => {
    return (
        <div className={s.trailer__container}>
            <h2 className={s.trailer__title}>Трейлер</h2>
            <div className={s.trailer__block}>
                <YouTube className={s.trailer__youtube} videoId={props.trailerID}/>
            </div>

        </div>
    );
};

export default Trailer;