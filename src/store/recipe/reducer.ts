import {IRecipe} from "../../models/Recipe"
import {Action, RecipeState, RecipeActionTypes} from "./types"

const initialState: RecipeState = {
    loading: false,
    filter: '',
    data: [],
    maxItemsPage: 10,
}

export const recipeReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case RecipeActionTypes.START_RECIPES:
            return {...state, loading: true}
        case RecipeActionTypes.FETCH_RECIPES_SUCCESS:
            return {...state, loading: false, data: [...action.payload]}
        case RecipeActionTypes.FETCH_RECIPES_ERROR:
            return {...state, loading: false, error: action.payload}
        case RecipeActionTypes.ADD_RECIPE:
            return {...state, data: addData(state.data, action.payload as IRecipe)}
        case RecipeActionTypes.MODIFY_RECIPE:
            return {...state, data: modifyData(state.data, action.payload as IRecipe)}
        case RecipeActionTypes.SET_FILTER:
            return {...state, filter: action.payload}
        case RecipeActionTypes.DELETE_RECIPE: {
            const data: IRecipe[] = state.data ?
                state.data.filter((item) => item.id !== action.payload)
                : []
            return {...state, data}
        }
        case RecipeActionTypes.SET_RECIPES_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}

function addData(state: IRecipe[] = [], payload: IRecipe) {
    return [...state, payload]
}

function modifyData(state: IRecipe[] = [], payload: IRecipe) {
    return [...state.filter(item => item.id !==payload.id), payload]
}