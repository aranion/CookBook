import { Link } from "react-router-dom";
import { Header } from "../../components";
import { Recipe } from "../../components";
import { SmallRecipe } from "../../components";
import styles from "./home.module.scss";
import { RECIPES_LIST } from "../../constants/recipesList";

// Временный массив для отрисовки навигации
const links = [
  {
    title: "Главная",
    URL: "/",
  },
  {
    title: "Все рецепты",
    URL: "/Recipes",
  },
  {
    title: "Моя кулинарная книга",
    URL: "/cookbook",
  },
  {
    title: "Добавить рецепт",
    URL: "/RecipeAddForm",
  },
];

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <nav className={styles.menu}>
        <ul>
          {links.map((el) => {
            return (
              <li key={el.URL}>
                <Link to={el.URL}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.center}>
        <Recipe recipe={RECIPES_LIST[0]} />
        <div className={styles["home__last-recipes"]}>
          <h2>Последние рецепты</h2>
          <div className={styles["last-recipes__container"]}>
            <SmallRecipe
              title={"Макарон"}
              author={"Cooker"}
              date={"30.11.2021"}
            />
            <SmallRecipe
              title={"Макарон"}
              author={"Cooker"}
              date={"30.11.2021"}
            />
            <SmallRecipe
              title={"Макарон"}
              author={"Cooker"}
              date={"30.11.2021"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
