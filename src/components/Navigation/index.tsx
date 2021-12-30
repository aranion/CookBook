import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { menuList, RouteNames } from "router/routeList";
import { useAppSelector } from "store";
import { getIsAuth, getUser } from "store/profile/selectors";
import LoginIcon from '@mui/icons-material/Login';
import { useActions } from "hooks/useActions";

export const Navigation = () => {

  const isAuth = useAppSelector(getIsAuth);
  const user = useAppSelector(getUser);

  const {logout} = useActions();

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
            ? <div className={styles.authorization}>Здравствуйте, {user.name ? user.name : user.email} <span onClick={logout}>Выйти<LoginIcon/></span></div> 
            : <Link className={styles.authorization} to={RouteNames.LOGIN}>Войти <LoginIcon/></Link>
        }
      </div>
    </nav>
  );
};
