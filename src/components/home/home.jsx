import s from './home.module.css';
import Title from "./title/title";
import FilmOfDay from "./FilmOfDay/filmOfDay";

function Home() {
    return (
        <div>
            <Title
                title="Заголовок секции 1"
                content="Основная информация секции 1"
                button="Кнопка секции 1"/>
            <FilmOfDay/>
        </div>
    );
}
export default Home;