import { $api } from "api/api";
import { Dispatch } from "redux";
import { RecipeAction, RecipeActionTypes } from "./types";
import { RECIPES_LIST } from "mocks/recipesList";

export const fetchAllRecipes =
  () => async (dispatch: Dispatch<RecipeAction>) => {
    try {
      dispatch({ type: RecipeActionTypes.START_RECIPES });

      const { data } = await $api.get("/recipes/get");
      // пока сервер пустой, пусть будет заглушка
      // if(!('name' in data)) {
      //     dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: RECIPES_LIST})
      // } else {
      //     dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: data});
      // }
      dispatch({
        type: RecipeActionTypes.FETCH_RECIPES_SUCCESS,
        payload: data,
      });
    } catch (e: any) {
      if (e instanceof Error)
        dispatch({
          type: RecipeActionTypes.FETCH_RECIPES_ERROR,
          payload: e,
        });
      // TODO поправить payload - убрать RECIPES_LIST
      dispatch({
        type: RecipeActionTypes.FETCH_RECIPES_SUCCESS,
        payload: RECIPES_LIST,
      });
    }
  };

export const setRecipesFilter =
  (filter: string) => (dispatch: Dispatch<RecipeAction>) => {
    try {
      dispatch({ type: RecipeActionTypes.SET_FILTER, payload: filter });
    } catch (e: any) {
      if (e instanceof Error)
        dispatch({
          type: RecipeActionTypes.FETCH_RECIPES_ERROR,
          payload: e,
        });
    }
  };

export const setIsAddRecipe = () => (dispatch: Dispatch<RecipeAction>) => {
  dispatch({ type: RecipeActionTypes.IS_ADD_RECIPE });
};

export const addRecipe =
  (recipeData: FormData) => async (dispatch: Dispatch<RecipeAction>) => {
    try {
      dispatch({ type: RecipeActionTypes.START_RECIPES });
      const res = await $api.post("recipes/create", recipeData);
      if (res.status === 200) {
        dispatch({ type: RecipeActionTypes.IS_ADD_RECIPE });
      }
      // dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: {}})
    } catch (e: any) {
      if (e instanceof Error)
        dispatch({
          type: RecipeActionTypes.FETCH_RECIPES_ERROR,
          payload: e,
        });
    }
  };
export const deleteRecipe =
  (id: string) => async (dispatch: Dispatch<RecipeAction>) => {
    try {
      dispatch({ type: RecipeActionTypes.START_RECIPES });
      const res = await $api.post(`/recipes/delete`, { id });
      console.log(res);
      // TODO нужно сделать проверку успешного удаления с выводом сообщения
      const { data } = await $api.get("/recipes/get");
      dispatch({
        type: RecipeActionTypes.FETCH_RECIPES_SUCCESS,
        payload: data,
      });
    } catch (e: any) {
      if (e instanceof Error)
        dispatch({
          type: RecipeActionTypes.FETCH_RECIPES_ERROR,
          payload: e,
        });
    }
  };
