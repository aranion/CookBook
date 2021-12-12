import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {AppRouter} from './router'
import store from './store'
import "./App.module.scss";

export function App() {
  return (
          <Provider store={store}>
              <BrowserRouter>
                  <AppRouter/>
              </BrowserRouter>
          </Provider>
  );
}
