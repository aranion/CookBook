import {useState} from 'react'
import {Button, TextField} from "@mui/material";
import {useLocation, useNavigate} from "react-router";
import {useAppDispatch} from "store";
import {useActions} from "hooks/useActions";
import styles from './loginForm.module.scss';

export const LoginForm = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    // const dispatch = useAppDispatch();

    const {login, register} = useActions()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState(''
    )
    //
    // function logInFake() {
    //     dispatch(changeIsAuth(true));
    //     navigate(location.state?.from.pathname || '/');
    // }

    const loginHandler = () => {
        login(email, pass)
    }
    const registerHandler = () => {
        console.log("registerHandler", email, pass)
        register(email, pass)
    }

    return (
        <div className={styles.center}>
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
                <Button variant="contained" color="primary" onClick={loginHandler}>
                    Войти
                </Button>
                <Button variant="contained" color="primary" onClick={registerHandler}>
                    Регистрация
                </Button>
            </div>
        </div>
    );
};
