import { ChangeEvent, SyntheticEvent, useEffect } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import { useActions } from "hooks/useActions";
import { useLocation, useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { RouteNames } from "../../router/routeList";
import { useAppSelector } from "../../store";
import { getError } from "../../store/profile/selectors";

export const AuthForm = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {
        login, 
        register,
        setName,
        setEmail,
        setPass,
        setConfirmPass,
        setError,
        setValid
    } = useActions();
    const errorAuth = useAppSelector(getError);
    const pathname = location.pathname;
    const redirection = (location.state as any)?.from.pathname || '/';
    const {
        name, 
        email, 
        pass, 
        confirmPass, 
        error, 
        valid
    } = useAppSelector(store => store.profile.inputFields)

    const clickHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        pathname === "/register" 
            ? await register(name, email, pass)
            : await login(email, pass); 
        navigate(redirection); //redirection, navigate - для перехода на выбранную страницу после удачного входа
        
        if ( !(await errorAuth)) navigate(RouteNames.HOME)
        else {
            setError({...error, auth: true, msg: "Проверьте email и пароль"});
            setValid({...valid, auth: false})
        }
    }
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        if ( !/^[a-zA-Zа-яА-Я0-9]*$/.test(e.target.value)) {
            setError({...error, name: true, msg: "Имя - только буквы и цифры"});
            setValid({...valid, name: false});
        } else {
            setError({...error, name: false, msg: ''});
            setValid({...valid, name: true});
        }
        setName(e.target.value)
    }
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        if ( !/^.*@.*\.\w{2,4}$/.test(e.target.value)) {
            setError({...error, email: true, msg: "Введите корректный Email"});
            setValid({...valid, email: false});
        } else {
            setError({...error, email: false, msg: ''});
            setValid({...valid, email: true});
        }
        setEmail(e.target.value)
    }
    const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        if ( !/^\w{6,10}$/.test(e.target.value)) {
            setError({...error, pass: true, msg: "Пароль от 6 до 10 символов"});
            setValid({...valid, pass: false});
        } else {
            setError({...error, pass: false, msg: ''});
            setValid({...valid, pass: true});
        }
        setPass(e.target.value)
    }
    const handleChangeConfirmPass = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== pass) {
            setValid({...valid, confirmPass: false});
        } else {
            setValid({...valid, confirmPass: true});
        }
        setConfirmPass(e.target.value)
    }
    useEffect(() => {
            pathname === "/login" ?
                setValid({
                    ...valid,
                    name: true,
                    confirmPass: true,
                })
                : setValid({
                    ...valid,
                    name: false,
                    confirmPass: false,
                })
        }, [pathname]
    )
    useEffect(() => {
        if ( !name && !email && !pass) {}
        setError({...error, msg: ''});
    }, [name, email, pass])
    return (
        <form onSubmit={clickHandler} >
            <Box 
                sx={{
                py: 3,
                px: 8,
                display: 'flex',
                backgroundColor: 'white',
                opacity: 0.8,
                borderRadius: 3,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: 350,
            }}>
                <Typography variant="h4">
                    {pathname === "/register" ? "Регистрация" : "Авторизация"}
                </Typography>
                {pathname === "/register" &&
                    (<TextField
                        sx={{mt: 2}}
                        error={name ? !/^[a-zA-Zа-яА-Я0-9]*$/.test(name) : false}
                        autoFocus={pathname === "/register"}
                        label="Имя" variant="standard"
                        required={pathname === "/register"}
                        fullWidth
                        value={name}
                        onChange={handleChangeName}
                    />
                    )}
                <TextField
                    sx={{mt: 2}}
                    error={email ? !/^.*@.*\.\w{2,4}$/.test(email) : false}
                    autoFocus={pathname !== "/register"}
                    required
                    label="Логин" variant="standard"
                    fullWidth
                    value={email}
                    onChange={handleChangeEmail}
                />
                <TextField
                    sx={{mt: 2}}
                    error={pass ? !/^\w{6,10}$/.test(pass) : false}
                    type='password' label="Пароль" variant="standard"
                    required
                    fullWidth
                    value={pass}
                    onChange={handleChangePass}
                />
                {pathname === "/register" &&
                    (<TextField
                            error={confirmPass !== pass}
                            sx={{mt: 2}}
                            type='password' label="Подтвердите пароль" variant="standard"
                            required={pathname === "/register"}
                            fullWidth
                            value={confirmPass}
                            helperText={confirmPass !== pass ? "Пароли не совпадают" : " "}
                            onChange={handleChangeConfirmPass}
                        />
                    )}
                <Box 
                    sx={{pt: 2, display: 'flex', fontSize: '0.8rem'}}
                    className="error"
                >
                    <div>{error.msg ? error.msg : ""}&nbsp;</div>
                </Box>
                <Button
                    sx={{mt: 2, mb: 2}}
                    disabled={ !Object.values(valid).every(val => val === true)}
                    variant="outlined" color="primary"
                    fullWidth
                    type="submit"
                >
                    {pathname === "/register" ? "Регистрация" : "Войти"}
                </Button>
                {pathname === "/login" && (<Link to={RouteNames.REGISTRATION}>Регистрация</Link>)}
            </Box>
        </form>
    );
    }
;
