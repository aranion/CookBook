import { Action, ProfileState, ProfileActionTypes } from "./types";

const initialState: ProfileState = {
  isAuth: false,
  data: {
    id: '',
    email: '',
    isActivated: false,   
    name: 'Гость',
  }
}

export const profileReducer = (state = initialState, action: Action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        isAuth: !state.isAuth,
      };
    default:
      return state;
  }
};
