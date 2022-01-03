import { ChipData } from 'models/Search'
import { SearchActionTypes, ISearchForm } from './types'

export const setSearchForm = (form: ISearchForm) => ({
  type: SearchActionTypes.SET_SEARCH_FORM,
  payload: form
})

export const setSearchChips = (chip: ChipData) => ({
  type: SearchActionTypes.SET_CHIPS_SEARCH,
  payload: chip
});

export const deleteSearchChips = (chip: ChipData) => ({
  type: SearchActionTypes.DELETE_CHIPS_SEARCH,
  payload: chip
});