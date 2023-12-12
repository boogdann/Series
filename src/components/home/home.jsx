import Title from "./Title/title";
import FilmOfDay from "./FilmOfDay/filmOfDay";
import Slider from "../controls/Slider/Slider";
import Header from "../utils/header/header";

import s from "./home.module.css";
import About from "./About/about";
import Trailer from "./Trailer/trailer";
import Footer from "../utils/footer/footer";
import {useTranslation} from "react-i18next";

function Home() {

    const { t, i18n } = useTranslation();


    return (
        <div>
            <Header/>
            <Title
                title={t('home.title1')}
                content=""
                button={t('home.btn1')}/>

            <FilmOfDay
                title={t('home.title2')}
                button={t('home.btn2')}/>

            <Trailer
                trailerID="QdBZY2fkU-0"/>

            <About/>
            <Footer/>
        </div>
    );
}
export default Home;