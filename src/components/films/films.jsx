import * as React from 'react';
import Header from '../utils/header/header';
import s from './films.module.css'
import Footer from "../utils/footer/footer";

function Films() {
    return (
      <div className={s.Films}>
        <Header />
        <div>
          Content
        </div>
        <Footer />
      </div>
    );
  }

export default Films;