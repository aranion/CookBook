import { Ingredients, StepData } from "models/Recipe";
import {
  Action,
  AddRecipeState,
  AddRecipeActionTypes,
  IngredientInput,
  StepImg,
} from "./types";

const initialState: AddRecipeState = {
  loading: false,
  inputFields: {
    titleRecipe: "",
    description: "",
    isPrivat: false,                 
    urlImg: "",                     
    ingredients: [{                         
      description: "",                            
      count: "",    
      placeholder: `Ингредиент 1`                       
    },
    {                         
      description: "",                            
      count: "",    
      placeholder: `Ингредиент 2`                       
    },
    {                         
      description: "",                            
      count: "",    
      placeholder: `Ингредиент 3`                       
    }],                        
    steps: [{                               
      title: "Шаг 1",                            
      description: "",                      
      img: "",                                                           
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
                inputFields: {
                  ...state.inputFields, 
                  titleRecipe: 
                    state.inputFields.titleRecipe.length < 60 
                      ? (action.payload as string).length >= 60
                        ? (action.payload as string).substring(0,60)
                        : action.payload
                      : state.inputFields.titleRecipe 
                }
        }
      case AddRecipeActionTypes.SET_DESCRIPTION_RECIPE:
            return {
                ...state,
                inputFields: {
                  ...state.inputFields, 
                  description: 
                    state.inputFields.description.length < 250 
                      ? (action.payload as string).length >= 250
                        ? (action.payload as string).substring(0,250)
                        : action.payload
                      : state.inputFields.description}
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
                  debugger
                  if(el.placeholder 
                    === (action.payload as IngredientInput).placeholder
                    && el.description.length < 40) {
                      if((action.payload as IngredientInput).value.length >= 40) {
                        el.description = (action.payload as IngredientInput).value.substring(0,40);
                      } else{
                        el.description = (action.payload as IngredientInput).value;
                      }
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
                  if(el.placeholder 
                    === (action.payload as IngredientInput).placeholder 
                    && el.count.length < 7
                  ) {
                    if ((action.payload as IngredientInput).value.length >= 7) {
                      el.count = (action.payload as IngredientInput).value.substring(0,7);
                    } else {
                      el.count = (action.payload as IngredientInput).value;
                    }
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
                if(el.title === (action.payload as StepData).title && el.description.length < 350) {
                  if((action.payload as StepData).description.length >=350) {
                    el.description = (action.payload as StepData).description.substring(0,350);
                  } else {
                    el.description = (action.payload as StepData).description;
                  }
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
            cost: (action.payload as number) <= 9999 ? action.payload : state.inputFields.cost
          }
        }
      case AddRecipeActionTypes.SET_COOKING_TIME_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            cookingTime: (action.payload as number) <= 360 ? action.payload : state.inputFields.cookingTime
          }
        }
      case AddRecipeActionTypes.SET_PERSONS_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            persons: (action.payload as number) <= 50 ? action.payload : state.inputFields.persons
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
      case AddRecipeActionTypes.SET_URL_IMG_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            urlImg: action.payload
          }
        } 
      case AddRecipeActionTypes.SET_URL_IMG_STEP_RECIPE:
        return {
          ...state,
          inputFields: {
            ...state.inputFields, 
            steps: [
              ...state.inputFields.steps.map( (step, i) => {
                  if (i === (action.payload as StepImg).id) {
                    const imgArr = (action.payload as StepImg).img.split('\\');
                    step.img = imgArr[imgArr.length - 1];
                  }
                  return step;
              } ),
            ]
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
