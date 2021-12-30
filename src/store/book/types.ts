export type Action = {
  type: string
  payload?: boolean | Error | number | string | BookItem
}
export interface BookItem {
    title: string,
    _id: string,
    photo?: string,
    description: string,
    ingredients: string[],
    createdAt: string
    recipesId: Array<string>
    updatedAt: string
    user: string
    __v: 0
}

export interface BookState {
  loading: boolean;
  data: BookItem
}

export enum BookActionTypes {
  START_BOOK = "@book/START_BOOK",
  FETCH_BOOK_SUCCESS = "@book/FETCH_BOOK_SUCCESS",
  FETCH_BOOK_ERROR = "@book/FETCH_BOOK_ERROR",
}

interface StartBookAction {
  type: BookActionTypes.START_BOOK
}

interface FetchBookSuccessAction {
  type: BookActionTypes.FETCH_BOOK_SUCCESS;
  payload: BookItem;
}

interface FetchBookErrorAction {
  type: BookActionTypes.FETCH_BOOK_ERROR;
  payload: Error;
}

export type BookAction =
  BookActionTypes
  | StartBookAction
  | FetchBookSuccessAction
  | FetchBookErrorAction