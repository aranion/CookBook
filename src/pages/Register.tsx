import { Button, TextField } from "@mui/material";
import styles from './pages.module.scss';

const Register = () => {
    return (
        <form className={styles.pages__center} onSubmit={(e)=> e.preventDefault()}>
            Регистрация (Заглушка!)
            <div>
                <TextField label="E-mail" variant="standard" required/>
            </div>
            <div>
                <TextField type='password' label="Пароль" variant="standard" required/>
            </div>
            <div>
                <TextField type='password' label="Пароль повторно" variant="standard" required/>
            </div>
            <div>
                <Button variant="contained" color="primary" type="submit" >
                    Зарегистрироваться
                </Button>
            </div>
        </form>
    );
};

export default Register;