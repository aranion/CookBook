import { ChipData } from 'models/Search'
import { Action, SearchActionTypes, SearchState} from "./types";

const initialState: SearchState = {
  chips: [
    { key: '0', label: 'Картофель' },
    { key: '1', label: 'Форель' },
    { key: '2', label: 'Петрушка' }
  ]
}

export const searchReducer = (state = initialState, action: Action) => {
    switch (action.type) {
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
