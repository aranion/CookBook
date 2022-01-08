import { RootState } from 'store'
import { ChipData } from 'models/Search'
import { SearchActionTypes, ISearchForm, SearchState } from './types'
import { $api } from "api/api";
import { Dispatch } from "redux";
import { RecipeAction, RecipeActionTypes } from '../recipe/types';
import { IRecipe } from "models/Recipe";

export const setSearchForm = (form: ISearchForm) => ({
  type: SearchActionTypes.SET_SEARCH_FORM,
  payload: form
})

export const setSearchChips = (chip: ChipData) => ({
  type: SearchActionTypes.SET_CHIPS_SEARCH,
  payload: chip
});

export const deleteSearchChips = (chip: ChipData) => ({
  type: SearchActionTypes.DELETE_CHIPS_SEARCH,
  payload: chip
});

export const fetchSearchRecipes = () => async (dispatch: Dispatch<RecipeAction>, getState: () => RootState) => {
  try {
      dispatch({type: RecipeActionTypes.START_RECIPES});

      const {data} = await $api.get('/recipes/get');

      console.log('data: ', data)

      const filter = getState().searchRecipe

      console.log('filter: ', filter)

      if(data) {
        dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: search(data, filter)});
      } else {
        dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: []})
      }

  } catch (e: any) {
      if (e instanceof Error) dispatch({
          type: RecipeActionTypes.FETCH_RECIPES_ERROR,
          payload: e
      })
      dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: []})
  }
}

const search = (data: IRecipe[], filter: SearchState) => {
  return data
    .filter(recipe => recipe.rating >= filter.rating)
    .filter(recipe => {
      if(filter.time === 0) return true
      return recipe.time <= filter.time
    })
    .filter(recipe => {
      if(filter.cuisine === '' || !recipe.cuisine || !filter.cuisine) return true
      return recipe.cuisine.trim().toLowerCase() === filter.cuisine.trim().toLowerCase()
    })
    .filter(recipe => {
      if(filter.typeOfMeal === '' || !recipe.typeOfMeal || !filter.typeOfMeal) return true
      return recipe.typeOfMeal.trim().toLowerCase() === filter.typeOfMeal.trim().toLowerCase()
    })
    .filter(recipe => {
      if(filter.author === '') return true
      return recipe.author.trim().toLowerCase() === filter.author.trim().toLowerCase()
    })
    .filter(recipe => {
      if(filter.title === '') return true
      
      const filterTitle = filter.title.split('')

      for (let word of filterTitle) {
        const reg = new RegExp(word, 'ig')
        if(recipe.title.match(reg)?.length) return true
      }

      return false
    })
    .filter(recipe => {
      if(!filter.chips.length) return true

      let ingredientsList = ''

      recipe.ingredients.forEach(ingredient => {
        ingredientsList += ` ${ingredient.description.toLowerCase()}`
      })

      for (let chip of filter.chips) {
        if(ingredientsList.match(chip.label.toLowerCase())) return true
      }

      return false
    })
}