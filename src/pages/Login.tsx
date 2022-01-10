import { AuthForm } from "components";
import {Box} from "@mui/material";

const Login = () => {
    return (
        <Box sx={{ display: 'flex', m: 'auto'}}>
            <AuthForm />
        </Box>
    );
};

export default Login;