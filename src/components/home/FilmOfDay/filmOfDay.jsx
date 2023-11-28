import React from 'react';
import s from './filmOfDay.module.css';

const FilmOfDay = (props) => {
    return (
        <div className={s.movie_info__section}>
            <div className={s.movie_info__container}>
                <h2>{props.title}</h2>
                <p>Дата выхода: {props.releaseDate}</p>
                <p>Количество серий: {props.episodeCount}</p>
                <p>Трейлер: {props.trailerUrl}</p>
            </div>
        </div>
    );
};

export default FilmOfDay;