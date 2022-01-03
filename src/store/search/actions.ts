import { ChipData } from 'models/Search'
import { SearchActionTypes } from './types'

export const setSearchTitle = (title: string) => ({
  type: SearchActionTypes.SET_TITLE_SEARCH,
  payload: title
})

export const setSearchAuthor = (author: string) => ({
  type: SearchActionTypes.SET_AUTHOR_SEARCH,
  payload: author
})

export const setSearchTypeOfMeal = (typeOfMeal: string) => ({
  type: SearchActionTypes.SET_TYPE_OF_MEAL_SEARCH,
  payload: typeOfMeal
})

export const setSearchCuisine = (cuisine: string) => ({
  type: SearchActionTypes.SET_CUISINE_SEARCH,
  payload: cuisine
})

export const setSearchKindOfFood = (kindOfFood: string) => ({
  type: SearchActionTypes.SET_KIND_OF_FOOD_SEARCH,
  payload: kindOfFood
})

export const setSearchChips = (chip: ChipData) => ({
  type: SearchActionTypes.SET_CHIPS_SEARCH,
  payload: chip
});

export const deleteSearchChips = (chip: ChipData) => ({
  type: SearchActionTypes.DELETE_CHIPS_SEARCH,
  payload: chip
});

export const setSearchTime = (time: number) => ({
  type: SearchActionTypes.SET_TIME_SEARCH,
  payload: time
})

export const setSearchRating = (rating: number) => ({
  type: SearchActionTypes.SET_RATING_SEARCH,
  payload: rating
})