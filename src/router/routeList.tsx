import { ReactElement } from "react";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes";
import NotFound from "../pages/NotFound";

export interface IRoute {
  title: string;
  path: string;
  component: ReactElement;
  private: boolean;
  menu: boolean;
}

export const routes: IRoute[] = [
  {
    title: "Главная",
    path: "/",
    component: <Home />,
    private: false,
    menu: true,
  },
  {
    title: "Рецепты",
    path: "/recipes",
    component: <Recipes />,
    private: true,
    menu: true,
  },
  {
    title: "Страница не найдена",
    path: "/*",
    component: <NotFound />,
    private: false,
    menu: false,
  },
  // {
  //     title: "Авторизация",
  //     path: "/login",
  //     component: "../pages/Login",
  //     private: false,
  //     menu: false,
  // },
  // {
  //     title: "Регистрация",
  //     path: "/register",
  //     component: "../pages/Register",
  //     private: false,
  //     menu: false,
  // },
];
