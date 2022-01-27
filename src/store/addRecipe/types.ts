import { Ingredients, StepData } from "models/Recipe"

export interface IngredientInput {
    value: string,
    placeholder: string 
  }
export interface StepImg {
    img: string,
    id: number
}

export type Action = {
    type: string
    payload?: boolean | Error | number | string | IngredientInput | StepData | StepImg
}

export interface InputFields {
    titleRecipe: string,                        
    description: string,    
    isPrivat: boolean,                    
    urlImg: string,                     
    ingredients: Ingredients[],                        
    steps: StepData[],                                     
    cost: number,                               
    persons: number,                            
    typeOfMeal: string,                         
    cookingTime: number,                        
    typeCuisine: string,                        
    kindOfFood: string,
}
export interface DataSelectForm {
    cuisine: string[],
    typeOfMeal: string[],
    kindOfFood: string[]
}

export interface AddRecipeState {
    loading: boolean,
    inputFields: InputFields,
    dataSelectForm: DataSelectForm
}

export enum AddRecipeActionTypes {
    SET_TITLE_RECIPE = '@addRecipe/SET_TITLE_RECIPE',
    SET_DESCRIPTION_RECIPE='@addRecipe/SET_DESCRIPTION_RECIPE',
    SET_IS_PRIVAT_RECIPE='@addRecipe/SET_IS_PRIVAT_RECIPE',
    ADD_INGREDIENT_ITEM_RECIPE='@addRecipe/ADD_INGREDIENT_ITEM_RECIPE',
    DEL_INGREDIENT_ITEM_RECIPE='@addRecipe/DEL_INGREDIENT_ITEM_RECIPE',
    SET_INGREDIENT_ITEM_RECIPE='@addRecipe/SET_INGREDIENT_ITEM_RECIPE',
    SET_INGREDIENT_AMOUNT_ITEM_RECIPE='@addRecipe/SET_INGREDIENT_AMOUNT_ITEM_RECIPE',
    ADD_STEP_RECIPE='@addRecipe/ADD_STEP_RECIPE',
    DEL_STEP_RECIPE='@addRecipe/DEL_STEP_RECIPE',
    SET_STEP_ITEM_RECIPE='@addRecipe/SET_STEP_ITEM_RECIPE',
    SET_COST_RECIPE='@addRecipe/SET_COST_RECIPE',
    SET_COOKING_TIME_RECIPE='@addRecipe/SET_COOKING_TIME_RECIPE',
    SET_PERSONS_RECIPE='@addRecipe/SET_PERSONS_RECIPE',
    SET_TYPE_CUISINE_RECIPE='@addRecipe/SET_TYPE_CUISINE_RECIPE',
    SET_TYPE_OF_MEAL_RECIPE='@addRecipe/SET_TYPE_OF_MEAL_RECIPE',
    SET_KIND_OF_FOOD_RECIPE='@addRecipe/SET_KIND_OF_FOOD_RECIPE',
    SET_URL_IMG_RECIPE='@addRecipe/SET_URL_IMG_RECIPE',
    SET_URL_IMG_STEP_RECIPE='@addRecipe/SET_URL_IMG_STEP_RECIPE',
    CLEAN_FORM_RECIPE='@addRecipe/CLEAN_FORM_RECIPE',
}


export type AddRecipeAction =
    ''