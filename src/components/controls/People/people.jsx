import React from 'react';

import s from './people.module.css';

const People = ({image, text}) => {
    return (
        <div className={s.people__container}>
            <img className={s.people__image} src={image} alt="people"/>
            <p className={s.people__text}>{text}</p>
        </div>
    );
};

export default People;