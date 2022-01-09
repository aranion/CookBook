import { Ingredients, StepData } from "models/Recipe";
import {
  Action,
  AddRecipeState,
  AddRecipeActionTypes,
  IngredientInput,
} from "./types";

const initialState: AddRecipeState = {
  loading: false,
  inputFields: {
    titleRecipe: "",
    description: "",
    isPrivat: false,                 
    photoCoverBook: "",                     
    ingredients: [{                         
      description: "",                            
      count: "",    
      placeholder: `Ингредиент 1`                       
    }],                        
    steps: [{                               
      title: "Шаг 1",                            
      description: "",                      
      urlImg: "",                                                           
    }],                                     
    cost: 0,                               
    persons: 0,                            
    typeOfMeal: '',                         
    cookingTime: 0,                        
    typeCuisine: '',                        
    kindOfFood: '',                         
  },
  dataSelectForm: {
    cuisine: [],
    typeOfMeal: [],
    kindOfFood: [],
  },
};

export const addRecipeReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case AddRecipeActionTypes.SET_TITLE_RECIPE:
            return {
                ...state,
                inputFields: {...state.inputFields, titleRecipe: action.payload}
        }
      case AddRecipeActionTypes.SET_DESCRIPTION_RECIPE:
            return {
                ...state,
                inputFields: {...state.inputFields, description: action.payload}
        }
      case AddRecipeActionTypes.SET_IS_PRIVAT_RECIPE:
            return {
                ...state,
                inputFields: {...state.inputFields, isPrivat: action.payload}
        }
      case AddRecipeActionTypes.ADD_INGREDIENT_ITEM_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            ingredients: [
              ...state.inputFields.ingredients,
              { description: "", 
                count: '', 
                placeholder: `Ингредиент ${state.inputFields.ingredients.length + 1}` 
              } as Ingredients
            ]
          }
        }
      case AddRecipeActionTypes.DEL_INGREDIENT_ITEM_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            ingredients: [
              ...state.inputFields.ingredients
                .filter(el => el.placeholder !== action.payload)
                .map((el,i) => {
                  el.placeholder = `Ингредиент ${i+1}`
                  return el
                })
              ]
          }
        }
      case AddRecipeActionTypes.SET_INGREDIENT_ITEM_RECIPE:
          return {
            ...state,
            inputFields: {
              ...state.inputFields, 
              ingredients: [
                ...state.inputFields.ingredients
                .map(el => {
                  if(el.placeholder === (action.payload as IngredientInput).placeholder) {
                    el.description = (action.payload as IngredientInput).value;
                  }
                  return el;
                })
              ]
            }
        }
      case AddRecipeActionTypes.SET_INGREDIENT_AMOUNT_ITEM_RECIPE:
          return {
            ...state,
            inputFields: {
              ...state.inputFields, 
              ingredients: [
                ...state.inputFields.ingredients
                .map(el => {
                  if(el.placeholder === (action.payload as IngredientInput).placeholder) {
                    el.count = (action.payload as IngredientInput).value;
                  }
                  return el;
                })
              ]
            }
        }
      case AddRecipeActionTypes.ADD_STEP_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            steps: [
              ...state.inputFields.steps,
              {                               
                title: `Шаг ${state.inputFields.steps.length + 1}`,                            
                description: "",                      
                urlImg: "",                                                           
              } as StepData
            ]
          }
        }
      case AddRecipeActionTypes.DEL_STEP_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            steps: [
              ...state.inputFields.steps
                .filter(el => el.title !== action.payload)
                .map((el,i) => {
                  el.title = `Шаг ${i+1}`;
                  return el;
                })
            ]
          }
        }
      case AddRecipeActionTypes.SET_STEP_ITEM_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            steps: [
              ...state.inputFields.steps
              .map(el => {
                if(el.title === (action.payload as StepData).title) {
                  el.description = (action.payload as StepData).description;
                }
                return el;
              })
            ]
          }
        }
      case AddRecipeActionTypes.SET_COST_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            cost: action.payload
          }
        }
      case AddRecipeActionTypes.SET_COOKING_TIME_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            cookingTime: action.payload
          }
        }
      case AddRecipeActionTypes.SET_PERSONS_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            persons: action.payload
          }
        }
      case AddRecipeActionTypes.SET_TYPE_CUISINE_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            typeCuisine: action.payload
          }
        }
      case AddRecipeActionTypes.SET_TYPE_OF_MEAL_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            typeOfMeal: action.payload
          }
        } 
      case AddRecipeActionTypes.SET_KIND_OF_FOOD_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            kindOfFood: action.payload
          }
        } 
      case AddRecipeActionTypes.CLEAN_FORM_RECIPE:
        return {
          ...initialState,
          inputFields: {
            ...initialState.inputFields,
            ingredients: [{                         
              ingredient: "",                            
              amount: "",    
              placeholder: `Ингредиент 1`                       
            }],
            steps: [{                               
              title: "Шаг 1",                            
              description: "",                      
              urlImg: "",                                                           
            }]
          }
        } 
      default:
          return state
    }
}
