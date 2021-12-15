import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from './router'
import store from './store'
import {Header} from "components";
import styles from './App.module.scss';
import {ProvideAuth} from "hooks/useAuth";

export function App() {
    return (
        <ProvideAuth>
            <Provider store={store}>
                <BrowserRouter>
                    <div className={styles.main}>
                        <Header/>
                        <AppRouter/>
                    </div>
                </BrowserRouter>
            </Provider>
        </ProvideAuth>

    );
}
