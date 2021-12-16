import { combineReducers, createStore } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { recipeReducer } from "./recipe/reducer";
import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
    recipes: recipeReducer,
    profile: profileReducer
});
const store = createStore(
    rootReducer
    /*   middleware: [additionalMiddleware, logger] as const, */
    /*   enhancers: [monitorReducersEnhancer], */
);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
