import { IAuthor } from 'models/Recipe'
import { SearchState } from 'store/search/types'

export const clearSearchForm: SearchState = {
  title: '',
  author: {} as IAuthor,
  typeOfMeal: '',
  cuisine: '',
  kindOfFood: '',
  chips: [],
  time: 0,
  rating: 0,
}