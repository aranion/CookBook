import { AuthForm } from "components";
import styles from './pages.module.scss';
import {Box} from "@mui/material";

const Login = () => {
    return (
        <Box sx={{ display: 'flex', m: 'auto'}}>
            <AuthForm />
        </Box>
    );
};

export default Login;