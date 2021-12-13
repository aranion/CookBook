import { IRecipe } from "../models/Recipe";

//временная заглушка с рецептами
export const RECIPES_LIST: Array<IRecipe> = [
  {
    id: "00fe",
    title: "Картофель жареный",
    ingredients: [
      {
        ingredient: "Картоха",
        amount: "3кг",
      },
      {
        ingredient: "Масло",
        amount: "30г",
      },
      {
        ingredient: "Лук",
        amount: "1кг",
      },
    ],
    description: "Просто жарить",
    time: 48,
    author: "Cooker",
    typeOfMeal: "обед",
    cost: 15,
  },
  {
    id: "01fe",
    title: "Макарон",
    ingredients: [
      {
        ingredient: "Макарон",
        amount: "3кг",
      },
      {
        ingredient: "Соль",
        amount: "3г",
      },
      {
        ingredient: "Рандомный соус",
        amount: "1кг",
      },
    ],
    description: "Просто варить, смешать",
    time: 15,
    author: "Cooker",
    typeOfMeal: "обед",
    cost: 49,
  },
  {
    id: "02fe",
    title: "Омлет",
    ingredients: [
      {
        ingredient: "Яйца",
        amount: "3шт",
      },
      {
        ingredient: "Молоко",
        amount: "300г",
      },
    ],
    description: "Просто жарить",
    time: 48,
    author: "Cooker",
    typeOfMeal: "обед",
    cost: 22,
  },
];
