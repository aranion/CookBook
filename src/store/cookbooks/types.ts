export type Action = {
  type: string
  payload?: boolean | Error | number | string | CookbooksItem[]
}
export interface CookbooksItem {
  photo: string,
  name: string,
  description: string,
  count: number,
  id: string,
}

export interface CookbooksState {
  loading: boolean;
  books: CookbooksItem[];
}

export enum CookbooksActionTypes {
  START_COOKBOOKS = "@book/START_COOKBOOKS",
  FETCH_COOKBOOKS_SUCCESS = "@book/FETCH_COOKBOOKS_SUCCESS",
  FETCH_COOKBOOKS_ERROR = "@book/FETCH_COOKBOOKS_ERROR",
}

interface StartCookbooksAction {
  type: CookbooksActionTypes.START_COOKBOOKS
}

interface FetchCookbooksSuccessAction {
  type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS;
  payload: CookbooksItem[];
}

interface FetchCookbooksErrorAction {
  type: CookbooksActionTypes.FETCH_COOKBOOKS_ERROR;
  payload: Error;
}

export type CookbookAction =
  CookbooksActionTypes
  | StartCookbooksAction
  | FetchCookbooksSuccessAction
  | FetchCookbooksErrorAction