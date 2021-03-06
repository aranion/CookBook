import { ChipData } from 'models/Search'
import { IRecipe } from 'models/Recipe'

export type Action = {
  type: string
  payload?: ChipData | ISearchForm
}

export interface ISearchForm {
  title: IRecipe['title'],
  author: IRecipe['author'],
  typeOfMeal: IRecipe['typeOfMeal'],
  cuisine: IRecipe['cuisine'],
  kindOfFood: IRecipe['kindOfFood'],
  time: IRecipe['time'],
  rating: IRecipe['rating'],
}

export interface SearchState extends ISearchForm {
  chips: ChipData[],
}

export enum SearchActionTypes {
  SET_SEARCH_FORM = '@search/SET_SEARCH_FORM',
  SET_CHIPS_SEARCH = '@search/SET_CHIPS_SEARCH',
  DELETE_CHIPS_SEARCH = '@search/DELETE_CHIPS_SEARCH',
}
