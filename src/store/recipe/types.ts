import {IRecipe} from "../../models/Recipe"

export type Action = {
    type: RecipeActionTypes
    payload: any //IRecipe | Error | number | string
}

export interface RecipeState {
    loading: boolean;
    isAddRecipe: boolean;
    data: IRecipe[] | [];
    filter: string;
    error?: Error;
    page?: number;
    limit?: number;
    maxItemsPage: number;
}

export enum RecipeActionTypes {
    START_RECIPES = '@recipes/START_RECIPES',
    FETCH_RECIPES_SUCCESS = '@recipes/FETCH_RECIPES_SUCCESS',
    IS_ADD_RECIPE = '@recipes/IS_ADD_RECIPE',
    FETCH_RECIPES_ERROR = '@recipes/FETCH_RECIPES_ERROR',
    ADD_RECIPE = '@recipes/ADD_RECIPE',
    MODIFY_RECIPE = '@recipes/MODIFY_RECIPES',
    DELETE_RECIPE = '@recipes/DELETE_RECIPE',
    SET_FILTER = '@recipes/SET_FILTER',
    SET_RECIPES_PAGE = '@recipes/SET_RECIPES_PAGE',
}

interface StartRecipeAction {
    type: RecipeActionTypes.START_RECIPES
}

interface FetchRecipeSuccessAction {
    type: RecipeActionTypes.FETCH_RECIPES_SUCCESS;
    payload: IRecipe[];
}
interface IsAddRecipeAction {
    type: RecipeActionTypes.IS_ADD_RECIPE
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

interface SetRecipesFilter {
    type: RecipeActionTypes.SET_FILTER;
    payload: string;
}

export type RecipeAction =
    StartRecipeAction
    | FetchRecipeErrorAction
    | IsAddRecipeAction
    | FetchRecipeSuccessAction
    | AddRecipeAction
    | ModifyRecipeAction
    | DeleteRecipeAction
    | SetRecipesPage
    | SetRecipesFilter