import Title from "./Title/title";
import FilmOfDay from "./FilmOfDay/filmOfDay";

function Home() {
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
                trailerUrl="https://www.youtube.com/watch?v=abc123"
            />
        </div>
    );
}
export default Home;