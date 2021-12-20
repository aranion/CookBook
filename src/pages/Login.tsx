import { LoginForm } from "components";
import styles from './pages.module.scss';

const Login = () => {
    return (
        <div className={styles.pages__center}>
            <LoginForm />
        </div>
    );
};

export default Login;