import { $api } from "api/api";
import { Dispatch } from "react";
import { BookActionTypes, BookAction, BookItem } from "./types";

export const fetchDataMemo = (id:string | undefined) => async (dispatch: Dispatch<BookAction>) => {
  try {
      dispatch({type: BookActionTypes.START_BOOK});
      
      const { data } = await $api.get(`/cookbook/get/${id}`);
      
      dispatch({type: BookActionTypes.FETCH_BOOK_SUCCESS, payload: data as BookItem});
  } catch (e: any) {
      if (e instanceof Error) dispatch({
          type: BookActionTypes.FETCH_BOOK_ERROR,
          payload: e
      })
      dispatch({type: BookActionTypes.FETCH_BOOK_SUCCESS, payload: {} as BookItem});
  }
}
