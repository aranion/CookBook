import {IRecipe} from 'models/Recipe';
import {createSelector} from 'reselect'
import {RootState} from "store";

export const getFilter = (state: RootState) => state.recipes.filter

export const getAllRecipes = (state: RootState) => state.recipes.data

export const getRecipesByFilter = createSelector(
    [getFilter, getAllRecipes],
    (filter, data) => data.filter((item: IRecipe) =>
        item.title.indexOf(filter) !== -1)
)