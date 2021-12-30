import { combineReducers, createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";

import { recipeReducer } from "./recipe/reducer";
import { profileReducer } from "./profile/reducer";
import { modalReducer } from './modal/reducer';
import { addRecipeReducer } from './addRecipe/reducer';
import { bookReducer } from './book/reducer';

import * as RecipeActions from './recipe/actions';
import * as ProfileActions from './profile/actions';
import * as AddRecipeActions from './addRecipe/actions';
import * as ModalActions from './modal/actions';
import * as BookAction from "./book/actions";
import * as CooknbookAction from "./cookbooks/actions";
import { cookbooksReducer } from './cookbooks/reducer';

const rootReducer = combineReducers({
    recipes: recipeReducer,
    profile: profileReducer,
    modal: modalReducer,
    addRecipe: addRecipeReducer,
    book: bookReducer,
    cookbooks: cookbooksReducer
});
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    /*   middleware: [additionalMiddleware, logger] as const, */
    /*   enhancers: [monitorReducersEnhancer], */
);

export const ActionCreators = {
    ...RecipeActions,
    ...ProfileActions,
    ...ModalActions,
    ...AddRecipeActions,
    ...BookAction,
    ...CooknbookAction
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;