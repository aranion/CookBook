import { ChipData } from 'models/Search'
import { Ingredients, IAuthor, IRecipe } from 'models/Recipe'

export type Action = {
  type: string
  payload?: boolean | Error | number | string | ChipData
}

export interface SearchState {
  title: IRecipe['title'],
  author: IAuthor['name'],
  typeOfMeal: IRecipe['typeOfMeal'],
  cuisine: IRecipe['cuisine'],
  kindOfFood: string,
  chips: ChipData[],
  time: IRecipe['time'],
  rating: IRecipe['rating'],
}

export enum SearchActionTypes {
  SET_TITLE_SEARCH = '@search/SET_TITLE_SEARCH',
  SET_AUTHOR_SEARCH = '@search/SET_AUTHOR_SEARCH',
  SET_TYPE_OF_MEAL_SEARCH = '@search/SET_TYPE_OF_MEAL_SEARCH',
  SET_CUISINE_SEARCH = '@search/SET_CUISINE_SEARCH',
  SET_KIND_OF_FOOD_SEARCH = '@search/SET_KIND_OF_FOOD_SEARCH',
  SET_CHIPS_SEARCH = '@search/SET_CHIPS_SEARCH',
  DELETE_CHIPS_SEARCH = '@search/DELETE_CHIPS_SEARCH',
  SET_TIME_SEARCH = '@search/SET_TIME_SEARCH',
  SET_RATING_SEARCH = '@search/SET_RATING_SEARCH'
}
