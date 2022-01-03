import { ChipData } from 'models/Search'
import { Action, SearchActionTypes, SearchState} from "./types";

const initialState: SearchState = {
  title: '',
  author: '',
  typeOfMeal: '',
  cuisine: '',
  kindOfFood: '',
  chips: [
    { key: '0', label: 'Картофель' },
    { key: '1', label: 'Форель' },
    { key: '2', label: 'Петрушка' }
  ],
  time: 0,
  rating: 4,
}

export const searchReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case SearchActionTypes.SET_TITLE_SEARCH: 
        return {...state, title: action.payload}
      case SearchActionTypes.SET_AUTHOR_SEARCH: 
        return {...state, author: action.payload}
      case SearchActionTypes.SET_TYPE_OF_MEAL_SEARCH: 
        return {...state, typeOfMeal: action.payload}
      case SearchActionTypes.SET_CUISINE_SEARCH: 
        return {...state, cuisine: action.payload}
      case SearchActionTypes.SET_KIND_OF_FOOD_SEARCH: 
        return {...state, kindOfFood: action.payload}
      case SearchActionTypes.SET_CHIPS_SEARCH:
        return {
          ...state,
          chips: [...state.chips, action.payload]
        }
      case SearchActionTypes.DELETE_CHIPS_SEARCH:
        const deleteChip = action.payload as ChipData
        const newChipsData = state.chips.filter((chip) => chip.key !== deleteChip.key)
        return {
          ...state,
          chips: newChipsData
        }
      case SearchActionTypes.SET_TIME_SEARCH:
        return {...state, time: action.payload}
      case SearchActionTypes.SET_RATING_SEARCH:
        return {...state, rating: action.payload}
      default:
          return state
    }
}
