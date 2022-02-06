import { Action, ProfileState, ProfileActionTypes } from "./types";

const initialState: ProfileState = {
  isAuth: false,
  user: {
    id: '',
    email: '',
    isActivated: false,   
    name: 'Гость',
  },
  inputFields: {
    name: '',
    email: '',
    pass: '',
    confirmPass: '',
    error: {
        name: false,
        email: false,
        pass: false,
        auth: false,
        msg: ""
    },
    valid: {
        name: false,
        email: false,
        pass: false,
        auth: true,
        confirmPass: false,
    }
  }
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
      case ProfileActionTypes.SET_NAME_PROFILE_FORM:
          return {
              ...state,
              inputFields: {...state.inputFields, name: action.payload}
          }
      case ProfileActionTypes.SET_EMAIL_PROFILE_FORM:
          return {
              ...state,
              inputFields: {...state.inputFields, email: action.payload}
          }
      case ProfileActionTypes.SET_PASS_PROFILE_FORM:
          return {
              ...state,
              inputFields: {...state.inputFields, pass: action.payload}
          }
      case ProfileActionTypes.SET_CONFIRM_PASS_PROFILE_FORM:
          return {
              ...state,
              inputFields: {...state.inputFields, confirmPass: action.payload}
          }
      case ProfileActionTypes.SET_ERROR_PROFILE_FORM:
          return {
              ...state,
              inputFields: {...state.inputFields, error: {...action.payload}}
          }
      case ProfileActionTypes.SET_VALID_PROFILE_FORM:
          return {
              ...state,
              inputFields: {...state.inputFields, valid: {...action.payload}}
          }
      default:
          return state
  }
};