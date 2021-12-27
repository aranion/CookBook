import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { menuList } from "router/routeList";
import { useAppSelector } from "store";
import { useActions } from "hooks/useActions";

export const Navigation = () => {
  const {isAuth, data} = useAppSelector(state => state.profile);
  const {changeIsAuth} = useActions();

  function  logOut () {
      changeIsAuth();
  } 

  const elemJSX_signin = <div><Link to="/login">Войти</Link> / <Link to="/registration">Регистрация</Link></div>;
  const elemJSX_signout = <div>Здравствуйте,{data.name} / <span onClick={logOut}>Выйти</span></div>;

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
        { isAuth ? elemJSX_signout : elemJSX_signin }
      </div>
    </nav>
  );
};
