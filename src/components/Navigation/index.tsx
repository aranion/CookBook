import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { menuList, RouteNames } from "router/routeList";
import { useAppSelector } from "store";
import { getIsAuth, getUser } from "store/profile/selectors";

export const Navigation = () => {

  const isAuth = useAppSelector(getIsAuth)
  const user = useAppSelector(getUser)

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
          isAuth 
            ? `Здравствуйте, ${user.name? user.name: user.email}` 
            : <Link to={RouteNames.LOGIN}>Войти</Link>
        }
      </div>
    </nav>
  );
};
