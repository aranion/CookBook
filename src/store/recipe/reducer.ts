import { IRecipe, IRecipeModify } from "../../models/Recipe";
import { Action, RecipeState, RecipeActionTypes } from "./types";
import { API_BASE_URL } from "../../constants/config";

const initialState: RecipeState = {
    loading: false,
    isAddRecipe: false,
    filter: '',
    data: [],
    maxItemsPage: 10,
}

export const recipeReducer = (state = initialState, action: Action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case RecipeActionTypes.START_RECIPES:
            return {...state, loading: true}
        case RecipeActionTypes.IS_ADD_RECIPE:
            return {...state, isAddRecipe: !state.isAddRecipe,}
        case RecipeActionTypes.FETCH_RECIPES_SUCCESS:
            return {...state, loading: false, data: [...modifyImg(action.payload)]}
        case RecipeActionTypes.FETCH_RECIPES_ERROR:
            return {...state, loading: false, error: action.payload}
        case RecipeActionTypes.ADD_RECIPE:
            return {...state, data: addData(state.data, action.payload as IRecipe)}
        case RecipeActionTypes.MODIFY_RECIPE:
            return {...state, data: modifyData(state.data, action.payload as IRecipe)}
        case RecipeActionTypes.SET_FILTER:
            return {...state, filter: action.payload}
        case RecipeActionTypes.DELETE_RECIPE: {
            const data: IRecipe[] = state.data 
                ? state.data.filter((item) => item._id !== action.payload) 
                : []
            return {...state, data}
        }
        case RecipeActionTypes.SET_RECIPES_PAGE:
            return {...state, page: action.payload}
        case RecipeActionTypes.SET_RECIPES_MODIFY_SUCCESS:
            const arrRecipe = state.data.map((el:any) => {
                if (el._id === (action.payload as IRecipeModify).id){
                    Object.keys(action.payload).map(item => {
                        if(item !== 'id' && item in el) {
                            el[item] = action.payload[item];    
                        }
                        return item;
                    })
                }
                return el;
            })

            return {...state, data: [...arrRecipe]}
        default:
            return state
    }
}

function addData(state: IRecipe[] = [], payload: IRecipe) {
    return [...state, payload]
}

function modifyData(state: IRecipe[] = [], payload: IRecipe) {
    return [...state.filter(item => item._id !== payload._id), payload]
}

function modifyImg(payload: IRecipe[]): IRecipe[] {
    return payload.map(el =>  {
        el.urlImg = `${API_BASE_URL}/img/${el._id}/urlImg/` + el.urlImg?.split('\\')[el.urlImg.split('\\').length - 1];
        return el;
    })
}