import * as React from 'react';
import Header from '../utils/header/header';
import s from './films.module.css'

function Films() {
    return (
      <div className={s.Films}>
        <Header />
        <div>
          films
        </div>
        
      </div>
    );
  }

export default Films;