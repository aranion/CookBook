import {$api} from "api/api";
import {IRecipe} from "models/Recipe";
import {Dispatch} from "redux";
import {RecipeAction, RecipeActionTypes} from './types'

export const fetchAllRecipes = () => async (dispatch: Dispatch<RecipeAction>) => {
    try {
        dispatch({type: RecipeActionTypes.START_RECIPES})
        const {data} = await $api.get('/recipes')
        dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: data})
    } catch (e: any) {
        if (e instanceof Error) dispatch({
            type: RecipeActionTypes.FETCH_RECIPES_ERROR,
            payload: e
        })
    }
}

export const addRecipe = (recipe: IRecipe) => async (dispatch: Dispatch<RecipeAction>) => {
    try {
        dispatch({type: RecipeActionTypes.START_RECIPES})
        const {data} = await $api.post('/create', {...recipe})

        dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: data})
    } catch (e: any) {
        if (e instanceof Error) dispatch({
            type: RecipeActionTypes.FETCH_RECIPES_ERROR,
            payload: e
        })
    }
}