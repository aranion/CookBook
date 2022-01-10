import { Dispatch } from "react";
import { CookbooksActionTypes, CookbookAction, CookbooksItem } from "./types";
import { COOKBOOKS } from '../../mocks/cookbooksData';
import { $api } from "api/api";

export const fetchCookbooks= () => async (dispatch: Dispatch<CookbookAction>) => {
  try {
      dispatch({type: CookbooksActionTypes.START_COOKBOOKS});
 
      const { data } = await $api.get(`/cookbook/get`);
      console.log(data);
      
      dispatch({type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS, payload: data});
  } catch (e: any) {
      if (e instanceof Error) dispatch({
          type: CookbooksActionTypes.FETCH_COOKBOOKS_ERROR,
          payload: e
      })
      // TODO Заглушка получения кулинарных книг
      dispatch({type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS, payload: COOKBOOKS as CookbooksItem[]});
  }
}
export const setCookbooks = (cookbook: any) => async (dispatch: Dispatch<CookbookAction>) => {
  try {
      dispatch({type: CookbooksActionTypes.START_COOKBOOKS});
      
      const res = await $api.post(`/cookbook/create`, {cookbook: {...cookbook}});
      console.log(res);
      const { data } = await $api.get(`/cookbook/get`);
      
      dispatch({type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS, payload: data });
  } catch (e: any) {
      if (e instanceof Error) dispatch({
          type: CookbooksActionTypes.FETCH_COOKBOOKS_ERROR,
          payload: e
      })
  }
}

export const deleteBook = (id:string) => async (dispatch: Dispatch<CookbookAction>) => {
  try {
    dispatch({type: CookbooksActionTypes.START_COOKBOOKS});
      const res = await $api.post(`/cookbook/delete`, {id});
      console.log(res);

      const { data } = await $api.get(`/cookbook/get`);
      dispatch({type: CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS, payload: data });
  } catch (e: any) {
      if (e instanceof Error) dispatch({
          type: CookbooksActionTypes.FETCH_COOKBOOKS_ERROR,
          payload: e
      })
  }
}
