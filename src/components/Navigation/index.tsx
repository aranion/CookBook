import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";

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
    URL: "/addRecipe",
  },
];

export const Navigation = () => {
  return (
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
  );
};
