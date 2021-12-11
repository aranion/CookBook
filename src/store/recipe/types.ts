import {IRecipe} from "../../models/Recipe"

export type Action = {
    type: string
    payload: IRecipe | Error | number | string
}

export interface RecipeState {
    loading: boolean
    data?: IRecipe[]
    error?: Error
    page?: number;
    limit?: number;
}

export enum RecipeActionTypes {
    FETCH_RECIPES = '@recipes/FETCH_RECIPES',
    FETCH_RECIPES_SUCCESS = '@recipes/FETCH_RECIPES_SUCCESS',
    FETCH_RECIPES_ERROR = '@recipes/FETCH_RECIPES_ERROR',
    ADD_RECIPE = '@recipes/ADD_RECIPE',
    MODIFY_RECIPE = '@recipes/MODIFY_RECIPES',
    DELETE_RECIPE = '@recipes/DELETE_RECIPE',
    SET_RECIPES_PAGE = '@recipes/SET_RECIPES_PAGE',
}

interface FetchRecipeAction {
    type: RecipeActionTypes.FETCH_RECIPES
}

interface FetchRecipeSuccessAction {
    type: RecipeActionTypes.FETCH_RECIPES_SUCCESS;
    payload: IRecipe[];
}

interface FetchRecipeErrorAction {
    type: RecipeActionTypes.FETCH_RECIPES_ERROR;
    payload: Error;
}

interface AddRecipeAction {
    type: RecipeActionTypes.ADD_RECIPE;
    payload: IRecipe;
}

interface ModifyRecipeAction {
    type: RecipeActionTypes.MODIFY_RECIPE;
    payload: IRecipe;
}

interface DeleteRecipeAction {
    type: RecipeActionTypes.DELETE_RECIPE;
    payload: string;
}

interface SetRecipesPage {
    type: RecipeActionTypes.SET_RECIPES_PAGE;
    payload: number;
}

export type RecipeAction =
    FetchRecipeAction
    | FetchRecipeErrorAction
    | FetchRecipeSuccessAction
    | AddRecipeAction
    | ModifyRecipeAction
    | DeleteRecipeAction
    | SetRecipesPage