import { Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useActions } from "hooks/useActions";
import styles from "./loginForm.module.scss";
import { RouteNames } from "router/routeList";

export const LoginForm = () => {
  // изменить :any
  const location:any = useLocation();
  const navigate = useNavigate();
  const { changeIsAuth } = useActions();

  function  logInFake (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    changeIsAuth();
    navigate(location.state?.from.pathname || RouteNames.HOME);         
  } 

  return (
    <form className={styles.center} onSubmit={ e => logInFake(e)}>
      Страница входа (Заглушка!)
      <div>
        <TextField label="Логин" variant="standard" />
      </div>
      <div>
        <TextField type='password' label="Пароль" variant="standard" />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Войти
        </Button>
      </div>
    </form>
  );
};
