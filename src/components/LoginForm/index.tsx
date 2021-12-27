import { Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, ActionCreators } from "store";
import styles from './loginForm.module.scss';

export const LoginForm = () => {
    // Нужно исправить any...
    const location: any = useLocation();
    // 
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function  logInFake () {
        dispatch(ActionCreators.changeIsAuth());
        navigate(location.state?.from.pathname || '/');         
    } 
    return (
        <form className={styles.center} onSubmit={(e)=> { e.preventDefault(); logInFake()}}>
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
