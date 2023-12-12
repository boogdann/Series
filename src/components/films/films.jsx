import * as React from 'react';
import Header from '../utils/header/header';
import s from './films.module.css'
import Footer from "../utils/footer/footer";
import Title from "../home/Title/title";
import SliderItem from "../utils/slider/sliderItem";
import {GetSerias} from "../../data/serials"
import { useTranslation } from 'react-i18next';




function Films() {

    const { t, i18n } = useTranslation();

    let data = GetSerias(i18n.language === 'en', false)

    return (
      <div className={s.Films}>
        <Header />
        <div>
            <Title
                title={t('films.title')}
                content={t('films.content')}
                button=""/>

            <div className={s.slider}>
                <SliderItem data={data}/>
            </div>

        </div>
        <Footer />
      </div>
    );
  }

export default Films;