import {IUser} from "models/User"

export type Action = {
    type: ProfileActionTypes
    payload: any //boolean | Error | number | string
}

export interface ErrorInputFields {
    name: boolean;
    email: boolean;
    pass: boolean;
    auth: boolean;
    msg: string;
}

export interface ValidInputFields {
    name: boolean;
    email: boolean;
    pass: boolean;
    auth: boolean;
    confirmPass: boolean;
}

interface InputFields {
    name: string;
    email: string;
    pass: string;
    confirmPass: string;
    error: ErrorInputFields;
    valid: ValidInputFields;
}

export interface ProfileState {
    isAuth: boolean;
    user?: IUser;
    error?: Error | string;
    inputFields: InputFields;
}

export enum ProfileActionTypes {
    START_PROFILE = '@profile/START_PROFILE',
    LOGIN_PROFILE_SUCCESS = '@profile/FETCH_PROFILE_SUCCESS',
    LOGIN_PROFILE_ERROR = '@profile/LOGIN_PROFILE_ERROR',
    LOGOUT_PROFILE_SUCCESS = '@profile/LOGOUT_PROFILE_SUCCESS',
    SET_NAME_PROFILE_FORM = '@profile/SET_NAME_PROFILE_FORM',
    SET_EMAIL_PROFILE_FORM = '@profile/SET_EMAIL_PROFILE_FORM',
    SET_PASS_PROFILE_FORM = '@profile/SET_PASS_PROFILE_FORM',
    SET_CONFIRM_PASS_PROFILE_FORM = '@profile/SET_CONFIRM_PASS_PROFILE_FORM',
    SET_ERROR_PROFILE_FORM = '@profile/SET_ERROR_PROFILE_FORM',
    SET_VALID_PROFILE_FORM = '@profile/SET_VALID_PROFILE_FORM',
}

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