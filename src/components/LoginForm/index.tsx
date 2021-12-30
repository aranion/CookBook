import styles from './loginForm.module.scss';
import { useState } from 'react'
import { Button, TextField } from "@mui/material";
import { useActions } from "hooks/useActions";
import { useLocation, useNavigate } from 'react-router';

export const LoginForm = () => {
    type LocationState = {
        from: { pathname: string }
      }
    const location = useLocation();
    const navigate = useNavigate();

    const {login, register} = useActions()

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, pass, (location.state as LocationState).from.pathname, navigate);
    }
    const registerHandler = () => {
        console.log("registerHandler", email, pass)
        register(email, pass)
    }

    return (
        <form className={styles.center} onSubmit={(e)=> loginHandler(e)}>
            Страница входа (Заглушка!)
            <div>
                <TextField label="Логин" variant="standard"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <TextField type='password' label="Пароль" variant="standard"
                           value={pass}
                           onChange={(e) => setPass(e.target.value)}
                />
            </div>
            <div>
                <Button variant="contained" color="primary" type='submit'>
                    Войти
                </Button>
                <Button variant="contained" color="primary" onClick={registerHandler}>
                    Регистрация
                </Button>
            </div>
        </form>
    );
};
