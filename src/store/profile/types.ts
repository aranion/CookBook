import {IUser} from "models/User"

export type Action = {
    type: ProfileActionTypes
    payload: any //boolean | Error | number | string
}

export interface ProfileState {
    isAuth: boolean;
    user?: IUser;
    error?: Error | string;
}

export enum ProfileActionTypes {
    START_PROFILE = '@profile/START_PROFILE',
    LOGIN_PROFILE_SUCCESS = '@profile/FETCH_PROFILE_SUCCESS',
    LOGIN_PROFILE_ERROR = '@profile/LOGIN_PROFILE_ERROR',
    LOGOUT_PROFILE_SUCCESS = '@profile/LOGOUT_PROFILE_SUCCESS',
}

// interface StartProfileAction {
//     type: ProfileActionTypes.START_PROFILE
// }

interface LoginProfileErrorAction {
    type: ProfileActionTypes.LOGIN_PROFILE_ERROR;
    payload: Error;
}

interface LoginProfileSuccessAction {
    type: ProfileActionTypes.LOGIN_PROFILE_SUCCESS;
    payload: IUser;
}

interface LogoutProfileSuccessAction {
    type: ProfileActionTypes.LOGOUT_PROFILE_SUCCESS;
}

export type ProfileAction =
    LoginProfileErrorAction
    | LoginProfileSuccessAction
    | LogoutProfileSuccessAction