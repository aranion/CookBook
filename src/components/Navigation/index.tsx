import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { menuList } from "router/routeList";

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
        {menuList.map((el, idx) => {
          return (el.menu &&
            <li key={idx}>
              <Link to={el.path}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
