import { Action, ProfileState, ProfileActionTypes } from "./types";

const initialState: ProfileState = {
    isAuth: false,
}

export const profileReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                isAuth: !state.isAuth
            }
        default:
            return state
    }
}