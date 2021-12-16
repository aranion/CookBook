import { ReactElement } from "react";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyCookbook from "pages/Cookbook";
import AddRecipe  from "pages/AddRecipe/AddRecipe";
import AdvancedSearch from 'components/AdvancedSearch';

export enum RouteNames {
  HOME = '/',
  RECIPES = '/recipes',
  COOKBOOK = '/cookbook',
  ADD_RECIPE = '/addRecipe',
  LOGIN = '/login',
  REGISTER = '/register',
  ADVANCED_SEARCH = '/search/advanced',
}
export interface IRoute {
  title: string;
  path: string;
  component: ReactElement;
  private: boolean;
  menu: boolean;
}

export const routeList: IRoute[] = [
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
    title: "Моя кулинарная книга",
    path: "/cookbook",
    component: <MyCookbook />,
    private: true,
    menu: true,
  },
  {
    title: "Создать рецепт",
    path: "/addRecipe",
    component: <AddRecipe />,
    private: true,
    menu: true,
  },
  {
      title: "Авторизация",
      path: "/login",
      component: <Login />,
      private: false,
      menu: false,
  },
  {
      title: "Регистрация",
      path: "/register",
      component: <Register />,
      private: false,
      menu: false,
  },
  {
    title: "Расширенный поиск",
    path: "/search/advanced",
    component: <AdvancedSearch />,
    private: false,
    menu: false,
  },
  {
    title: "Страница не найдена",
    path: "/*",
    component: <NotFound />,
    private: false,
    menu: false,
  },
];

export const menuList = routeList.filter(item => item.menu === true)