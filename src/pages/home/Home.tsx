import { Header } from "../../components/Header";
import { Recipe } from "../../components/RandomRecipe";
import { SmallRecipe } from "../../components/smallRecipe";
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
        <Recipe />
        <div className="home__last-recipes">
          <h2>Последние рецепты</h2>
          <div className="last-recipes__container">
            <SmallRecipe />
            <SmallRecipe />
            <SmallRecipe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
