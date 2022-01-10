import { ReactElement } from "react";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import MyCookbooks from "pages/Cookbooks/Cookbooks";
import AddRecipe  from "pages/AddRecipe";
import {AdvancedSearch} from '../components';
import { Book } from "../pages/Book/Book";

export enum RouteNames {
  HOME = '/',
  NOT_FOUND = '/*',
  RECIPES = '/recipes',
  COOKBOOKS = '/cookbooks',
  ADD_RECIPE = '/addRecipe',
  LOGIN = '/login',
  REGISTRATION = '/register',
  SEARCH_ADVANCED = '/search/advanced',
  PROFILE = '/profile',
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
    path: RouteNames.HOME,
    component: <Home />,
    private: false,
    menu: true,
  },
  {
    title: "Рецепты",
    path: RouteNames.RECIPES,
    component: <Recipes />,
    private: false,
    menu: true,
  },
  {
    title: "Мои кулинарные книги",
    path: RouteNames.COOKBOOKS,
    component: <MyCookbooks />,
    private: true,
    menu: true,
  },
  {
    title: "Создать рецепт",
    path: RouteNames.ADD_RECIPE,
    component: <AddRecipe />,
    private: true,
    menu: true,
  },
  {
    title: "Книга с рецептами",
    path: "/cookbooks/:id",
    component: <Book />,
    private: true,
    menu: false,
  },
  {
    title: "Авторизация",
    path: RouteNames.LOGIN,
    component: <Login />,
    private: false,
    menu: false,
  },
  {
    title: "Регистрация",
    path: RouteNames.REGISTRATION,
    component: <Login />,
    private: false,
    menu: false,
  },
  {
    title: "Расширенный поиск",
    path: RouteNames.SEARCH_ADVANCED,
    component: <AdvancedSearch />,
    private: false,
    menu: false,
  },
  {
    title: "Страница не найдена",
    path: RouteNames.NOT_FOUND,
    component: <NotFound />,
    private: false,
    menu: false,
  },
];

export const menuList = routeList.filter((item) => item.menu === true);
