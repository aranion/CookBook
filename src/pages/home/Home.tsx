import { Header } from "../../components/Header";
import { RandomRecipe } from "../../components/RandomRecipe";
import { Recipe } from "../../components/Recipe";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <nav className="menu">
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Все рецепты</a>
          </li>
          <li>
            <a href="#">Моя кулинарная книга</a>
          </li>
          <li>
            <a href="#">Добавить рецепт</a>
          </li>
        </ul>
      </nav>
      <div className="center">
        <RandomRecipe />
        <div className="home__last-recipes">
          <h2>Последние рецепты</h2>
          <div className="last-recipes__container">
            <Recipe />
            <Recipe />
            <Recipe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
