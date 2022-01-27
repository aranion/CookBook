import { StepData } from 'models/Recipe';
import { AddRecipeActionTypes, IngredientInput, StepImg } from './types'

export const setInpuTitleRecipe = (title: string) => ({
    type: AddRecipeActionTypes.SET_TITLE_RECIPE,
    payload: title
});
export const setDescriptionRecipe = (description: string) => ({
    type: AddRecipeActionTypes.SET_DESCRIPTION_RECIPE,
    payload: description
});
export const setIsPrivatRecipe = (isPrivat:boolean) => ({
    type: AddRecipeActionTypes.SET_IS_PRIVAT_RECIPE,
    payload: isPrivat
});
export const addIngredientItem = () => ({
    type: AddRecipeActionTypes.ADD_INGREDIENT_ITEM_RECIPE,
});
export const delIngredientItem = (deleteValue: string) => ({
    type: AddRecipeActionTypes.DEL_INGREDIENT_ITEM_RECIPE,
    payload: deleteValue
});
export const setIngredientItem = (item: IngredientInput) => ({
    type: AddRecipeActionTypes.SET_INGREDIENT_ITEM_RECIPE,
    payload: item,
});
export const setIngredientAmountItem = (item: IngredientInput) => ({
    type: AddRecipeActionTypes.SET_INGREDIENT_AMOUNT_ITEM_RECIPE,
    payload: item,
});
export const addStep = () => ({
    type: AddRecipeActionTypes.ADD_STEP_RECIPE,
});
export const delStep = (deleteValue: string) => ({
    type: AddRecipeActionTypes.DEL_STEP_RECIPE,
    payload: deleteValue
});
export const setStepDescription = (item: StepData) => ({
    type: AddRecipeActionTypes.SET_STEP_ITEM_RECIPE,
    payload: item,
});
export const setCostRecipe = (cost: number) => ({
    type: AddRecipeActionTypes.SET_COST_RECIPE,
    payload: cost,
});
export const setCookingTime = (cookingTime: number) => ({
    type: AddRecipeActionTypes.SET_COOKING_TIME_RECIPE,
    payload: cookingTime,
});
export const setPersons = (persons: number) => ({
    type: AddRecipeActionTypes.SET_PERSONS_RECIPE,
    payload: persons,
});
export const setTypeCuisine = (typeCuisine: string) => ({
    type: AddRecipeActionTypes.SET_TYPE_CUISINE_RECIPE,
    payload: typeCuisine,
});
export const setTypeOfMeal = (typeOfMale: string) => ({
    type: AddRecipeActionTypes.SET_TYPE_OF_MEAL_RECIPE,
    payload: typeOfMale,
});
export const setKindOfFood = (kindOfFood: string) => ({
    type: AddRecipeActionTypes.SET_KIND_OF_FOOD_RECIPE,
    payload: kindOfFood,
});
export const setUrlImg = (urlImg: string) => ({
    type: AddRecipeActionTypes.SET_URL_IMG_RECIPE,
    payload: urlImg,
});
export const setUrlImgStep = ({img, id}: StepImg ) => ({
    type: AddRecipeActionTypes.SET_URL_IMG_STEP_RECIPE,
    payload: { img, id },
});
export const cleanForm = () => ({
    type: AddRecipeActionTypes.CLEAN_FORM_RECIPE
});