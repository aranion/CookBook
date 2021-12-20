import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { menuList } from "router/routeList";
import { useAppSelector } from "store";

export const Navigation = () => {
  const profile = useAppSelector(state => state.profile);

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
      <div className={styles.menu__login}>
        {
          profile.isAuth ? 'Здравствуйте, Гость' : <Link to="/login">Войти</Link>
        }
        </div>
    </nav>
  );
};
