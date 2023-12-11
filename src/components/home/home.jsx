import Title from "./Title/title";
import FilmOfDay from "./FilmOfDay/filmOfDay";
import Slider from "../controls/Slider/Slider";
import Header from "../utils/header/header";

import s from "./home.module.css";
import About from "./About/about";
import Trailer from "./Trailer/trailer";
import Footer from "../utils/footer/footer";

function Home() {
    const images = [
        "https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?w=1060&t=st=1701209194~exp=1701209794~hmac=6b2b9f428bd3bf88d9b0e65eb97313c28b82cd952f8d56eb244caca4f7c86aed",
        "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.853899956.1701209196&semt=ais",
        "https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?size=626&ext=jpg&ga=GA1.1.853899956.1701209196&semt=ais",
    ];

    const text = [
        "инфа 1111111111111111111 11111111111 111111111111 1111111111 1111111111 1 11  11111111 1111111111 11111111111 11111111111111111 11111111",
        "инфа 2",
        "инфа 3",
    ]

    const names = [
        "Иванов Иван Иванович",
        "Петров Петр Петрович",
        "Сидоров Сидор Сидорович",
    ]

    const links = [
        "https://www.youtube.com/",
        "https://www.youtube.com/",
        "https://www.youtube.com/",
    ]

    return (
        <div>
            <Header/>
            <Title
                title="Куда я попал?"
                content=""
                button="Узнать подробнее"/>

            <FilmOfDay
                title="Сериал дня"
                releaseDate="24 сентября 2007 года"
                episodeCount={12}
                button="Звучит интересно"/>

            <Trailer
                trailerID="QdBZY2fkU-0"/>

            <About/>
            <Footer/>
        </div>
    );
}
export default Home;


//             <Slider
//                 images={images}
//                 text={text}
//                 names={names}
//                 links={links}/>