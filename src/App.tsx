import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {AppRouter} from './router'
import store from './store'
import { Header } from "components";
import styles from './App.module.scss';

export function App() {
  return (
          <Provider store={store}>
            <BrowserRouter>
              <Header />
              <div className={styles.main}>
                <AppRouter />
              </div>
            </BrowserRouter>
          </Provider>
  );
}
