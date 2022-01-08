import { ChipData } from 'models/Search'
import { Action, SearchActionTypes, SearchState, ISearchForm } from "./types";

export const initialState: SearchState = {
  title: '',
  author: '',
  typeOfMeal: '',
  cuisine: '',
  kindOfFood: '',
  chips: [],
  time: 0,
  rating: 0,
}

export const searchReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case SearchActionTypes.SET_SEARCH_FORM: 
        return {...state, ...action.payload as ISearchForm}
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
      default:
          return state
    }
}
