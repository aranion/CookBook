import { Action, CookbooksActionTypes, CookbooksItem, CookbooksState,  } from "./types";

const initialState: CookbooksState = { 
  loading: false,
  books: [
    {
      photo: "",
      name: "",
      description: "",
      count: 0,
      id: "",
    }
  ]
};

export const cookbooksReducer = (state = initialState, action: Action) => {
  console.log(action.type, action.payload);

  switch (action.type) {
    case CookbooksActionTypes.START_COOKBOOKS:
      return {...state, loading: true}
    case CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS:
      return {
        ...state , 
        loading: false, 
        books: [...action.payload as CookbooksItem[]]
      }
    case CookbooksActionTypes.FETCH_COOKBOOKS_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};
