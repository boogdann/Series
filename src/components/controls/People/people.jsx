import React from 'react';

import s from './people.module.css';

function handleClick({url}) {
    return (
        window.open(url, '_blank')
    );
}

const People = ({image, text, link}) => {
    return (
        <div className={s.people__container}>

            <img onClick={() => handleClick({url: link})} className={s.people__image} src={image} alt="people"/>
            <p className={s.people__text}>{text}</p>
        </div>
    );
};

export default People;