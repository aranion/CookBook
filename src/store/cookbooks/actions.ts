import { Dispatch } from "react";
import { CookbooksActionTypes, CookbookAction, CookbooksItem } from "./types";
import { COOKBOOKS } from '../../mocks/cookbooksData';

export const fetchCookbooks= () => async (dispatch: Dispatch<CookbookAction>) => {
  try {
      dispatch({type: CookbooksActionTypes.START_COOKBOOKS});

    //   const { data } = await $api.get(`/cookbooks`);
    //   dispatch({type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS, payload: data});
    
    // TODO Заглушка получения кулинарных книг
    dispatch({type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS, payload: COOKBOOKS as CookbooksItem[]});
  } catch (e: any) {
      if (e instanceof Error) dispatch({
          type: CookbooksActionTypes.FETCH_COOKBOOKS_ERROR,
          payload: e
      })
  }
}
