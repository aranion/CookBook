import {useEffect} from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import store from "./store";
import { Header } from "components";
import styles from "./App.module.scss";
import { ProvideAuth } from "hooks/useAuth";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#6E5530",
    },
  },
});

export function App() {

  return (
    <ProvideAuth>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <div className={styles.main}>
              <Header />
              <AppRouter />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </ProvideAuth>
  );
}
