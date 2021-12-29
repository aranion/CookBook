import { useEffect } from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router";
import store from "./store";
import {Header} from "components";
import styles from "./App.module.scss";
import {ProvideAuth} from "hooks/useAuth";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useActions } from "hooks/useActions";

const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#6E5530",
        },
    },
});

const Main = () => {
    const {checkAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    return (
        <div className={styles.main}>
            <Header/>
            <AppRouter/>
        </div>
    );
}

export function App() {

    return (
        <ProvideAuth>
            <Provider store={store}>
                <ThemeProvider theme={mainTheme}>
                    <BrowserRouter>
                        <Main/>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </ProvideAuth>
    );
}
