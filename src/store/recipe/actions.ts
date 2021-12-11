import { $api } from "api/api";
import { Dispatch } from "redux";
import {RecipeActionTypes} from './types'

export const fetchAllRecipes = () => async (dispatch: Dispatch) => {
    try{
        dispatch({type: RecipeActionTypes.FETCH_RECIPES})
        const data = await $api.get('/recipes')
        dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: data})
    } catch (e: any) {
        if(e instanceof Error) dispatch({type: RecipeActionTypes.FETCH_RECIPES_ERROR, payload: e})
    }
}

