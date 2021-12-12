import { Link } from "react-router-dom";
import { Header } from "../../components";
import { Recipe } from "../../components";
import { SmallRecipe } from "../../components";
import styles from "./home.module.scss";

// Временный массив для отрисовки навигации
const links = [
  {
    title: 'Главная',
    URL: '/'
  },
  {
    title: 'Все рецепты',
    URL: '/Recipes'
  },
  {
    title: 'Моя кулинарная книга',
    URL: '/MyCookBook'
  },
  {
    title: 'Добавить рецепт',
    URL: '/AddRecipe'
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
                <Link  to={el.URL}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.center}>
        <Recipe />
        <div className={styles['home__last-recipes']}>
          <h2>Последние рецепты</h2>
          <div className={styles['last-recipes__container']}>
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
