import { ChipData } from 'models/Search'

export type Action = {
  type: string
  payload?: boolean | Error | number | string | ChipData
}

export interface SearchState {
  chips: ChipData[],
}

export enum SearchActionTypes {
  SET_CHIPS_SEARCH = '@search/SET_CHIPS_SEARCH',
  DELETE_CHIPS_SEARCH = '@search/DELETE_CHIPS_SEARCH'
}
