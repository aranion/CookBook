import { ChipData } from 'models/Search'
import { SearchActionTypes } from './types'

export const setSearchChips = (chip: ChipData) => ({
  type: SearchActionTypes.SET_CHIPS_SEARCH,
  payload: chip
});

export const deleteSearchChips = (chip: ChipData) => ({
  type: SearchActionTypes.DELETE_CHIPS_SEARCH,
  payload: chip
})