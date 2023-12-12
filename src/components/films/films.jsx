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

    let data = GetSerias(i18n.language === 'en')

    return (
      <div className={s.Films}>
        <Header />
        <div>
            <Title
                title="Топ 6 самых длинных сериалов"
                content="Наша команда исследователей собрала для вас подробную информацию о сериалах,
                         которые выделяются своей продолжительностью. Смотрите ниже..."
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