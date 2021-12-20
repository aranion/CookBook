export type Action = {
    type: string
    payload: boolean | Error | number | string
}

export interface ProfileState {
    isAuth: boolean
}

export enum ProfileActionTypes {
    FETCH_PROFILE_SUCCESS = '@profile/FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR='@profile/FETCH_PROFILE_ERROR'
}

interface FetchProfileErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_ERROR;
    payload: Error;
}

export type ProfileAction =
    // FetchRecipeAction |
    FetchProfileErrorAction