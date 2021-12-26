import {$api} from "api/api";
import {IRecipe} from "models/Recipe";
import {Dispatch} from "redux";
import {RecipeAction, RecipeActionTypes} from './types'
import {RECIPES_LIST} from "constants/recipesList"

export const fetchAllRecipes = () => async (dispatch: Dispatch<RecipeAction>) => {
    try {
        dispatch({type: RecipeActionTypes.START_RECIPES});

        const {data} = await $api.get('/recipes/get');
        dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: data});
    } catch (e: any) {
        if (e instanceof Error) dispatch({
            type: RecipeActionTypes.FETCH_RECIPES_ERROR,
            payload: e
        })
        // TODO поправить payload - убрать RECIPES_LIST
        dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: RECIPES_LIST})
    }
}

export const setRecipesFilter = (filter: string) => (dispatch: Dispatch<RecipeAction>) => {
    try {
        dispatch({type: RecipeActionTypes.SET_FILTER, payload: filter})
    } catch (e: any) {
        if (e instanceof Error) dispatch({
            type: RecipeActionTypes.FETCH_RECIPES_ERROR,
            payload: e
        })
    }
}

export const addRecipe = (recipe: IRecipe) => async (dispatch: Dispatch<RecipeAction>) => {
    try {
        dispatch({type: RecipeActionTypes.START_RECIPES});

        // для добавления в store миную сервер, временно...
        dispatch({type: RecipeActionTypes.ADD_RECIPE, payload: recipe}); 

        const {data} = await $api.post('/create', {...recipe});
        dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: data})
    } catch (e: any) {
        if (e instanceof Error) dispatch({
            type: RecipeActionTypes.FETCH_RECIPES_ERROR,
            payload: e
        })
    }
}
