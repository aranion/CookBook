import { Action, ProfileState, ProfileActionTypes } from "./types";

const initialState: ProfileState = {
    isAuth: false,
}

export const profileReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ProfileActionTypes.LOGIN_PROFILE_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        case ProfileActionTypes.LOGIN_PROFILE_ERROR:
            return {
                ...state,
                isAuth: false,
                error: action.payload
            }
        case ProfileActionTypes.LOGOUT_PROFILE_SUCCESS:
            return {
                ...initialState
            }
        default:
            return state
    }
}