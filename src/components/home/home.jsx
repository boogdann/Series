import Title from "./Title/title";
import FilmOfDay from "./FilmOfDay/filmOfDay";
import Slider from "../controls/Slider/Slider";

function Home() {
    const images = [
        "https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?w=1060&t=st=1701209194~exp=1701209794~hmac=6b2b9f428bd3bf88d9b0e65eb97313c28b82cd952f8d56eb244caca4f7c86aed",
        "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.853899956.1701209196&semt=ais",
        "https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?size=626&ext=jpg&ga=GA1.1.853899956.1701209196&semt=ais",
    ];

    const text = [
        "инфа 1",
        "инфа 2",
        "инфа 3",
    ]

    return (
        <div>
            <Title
                title="Заголовок секции 1"
                content="Основная информация секции 1"
                button="Кнопка секции 1"/>
            <FilmOfDay
                title="Название фильма"
                releaseDate="2021-09-01"
                episodeCount={10}
                trailerID="CRNwi9DKSWA"
                button="Больше инфы"/>
            <Slider
                images={images}
                text={text}/>
        </div>
    );
}
export default Home;