import { Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../../store";
import { changeIsAuth } from "../../store/profile/actions";
import styles from "./loginForm.module.scss";

export const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function logInFake() {
    dispatch(changeIsAuth(true));
    navigate(location.state?.from.pathname || "/");
  }
  return (
    <div className={styles.center}>
      Страница входа (Заглушка!)
      <div>
        <TextField label="Логин" variant="standard" />
      </div>
      <div>
        <TextField type="password" label="Пароль" variant="standard" />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={logInFake}>
          Войти
        </Button>
      </div>
    </div>
  );
};
