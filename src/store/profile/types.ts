export type Action = {
    type: string
    payload: boolean | Error | number | string
}

export interface ProfileState {
    isAuth: boolean
}

export enum ProfileActionTypes {
    FETCH_PROFILE_SUCCESS = '@profile/FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR='@profile/FETCH_PROFILE_ERROR'
}

// interface FetchRecipeAction {
//     type: RecipeActionTypes.FETCH_RECIPES
// }

// interface FetchRecipeSuccessAction {
//     type: RecipeActionTypes.FETCH_RECIPES_SUCCESS;
//     payload: IRecipe[];
// }

interface FetchProfileErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_ERROR;
    payload: Error;
}

// interface AddRecipeAction {
//     type: RecipeActionTypes.ADD_RECIPE;
//     payload: IRecipe;
// }

// interface ModifyRecipeAction {
//     type: RecipeActionTypes.MODIFY_RECIPE;
//     payload: IRecipe;
// }

// interface DeleteRecipeAction {
//     type: RecipeActionTypes.DELETE_RECIPE;
//     payload: string;
// }

// interface SetRecipesPage {
//     type: RecipeActionTypes.SET_RECIPES_PAGE;
//     payload: number;
// }

export type ProfileAction =
    // FetchRecipeAction |
    FetchProfileErrorAction
//     | FetchRecipeSuccessAction
//     | AddRecipeAction
//     | ModifyRecipeAction
//     | DeleteRecipeAction
//     | SetRecipesPage