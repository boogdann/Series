import s from './home.module.css';
import Title from "./title/title";

function Home() {
    return (
      <Title
          title="Заголовок секции 1"
          content="Основная информация секции 1"
          button="Кнопка секции 1"
          />
    );
}
export default Home;