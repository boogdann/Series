import * as React from 'react';
import Header from '../utils/header/header';
import s from './films.module.css'
import Footer from "../utils/footer/footer";
import Title from "../home/Title/title";
import SliderItem from "../utils/slider/sliderItem";


let allSerials = [
    {
        id: 1,
        Name: "film 1",
        Photo: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg",
    },
    {
        id: 2,
        Name: "film 2",
        Photo: "https://www.vokrug.tv/pic/product/5/2/a/2/52a27d35a0ffc646b7a25bd8cbf5a120.jpeg",
    },
    {
        id: 3,
        Name: "film 3",
        Photo: "https://avatars.githubusercontent.com/u/118774688?v=4",
    },
    {
        id: 4,
        Name: "film 4",
        Photo: "https://avatars.githubusercontent.com/u/118774688?v=4",
    },
    {
        id: 5,
        Name: "film 5",
        Photo: "https://avatars.githubusercontent.com/u/118774688?v=4",
    },
    {
        id: 6,
        Name: "film 6",
        Photo: "https://avatars.githubusercontent.com/u/118774688?v=4",
    }
]


function Films() {
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
                <SliderItem data={allSerials}/>
            </div>

        </div>
        <Footer />
      </div>
    );
  }

export default Films;