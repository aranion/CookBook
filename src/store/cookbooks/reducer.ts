import { Action, CookbooksActionTypes, CookbooksItem, CookbooksState,  } from "./types";

const initialState: CookbooksState = { 
  loading: false,
  books: [
    {
      photo: "",
      title: "",
      description: "",
      _id: "",
      cuisine: "",
      user: "",
      updatedAt: "",
      createdAt: "",
      recipesId: []
    }
  ]
};

export const cookbooksReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CookbooksActionTypes.START_COOKBOOKS:
      return {...state, loading: true}
    case CookbooksActionTypes.FETCH_COOKBOOKS_SUCCESS:
      return { 
        ...state , 
        loading: false, 
        books: [
          // ...state.books.filter(el => el._id !== '' ? el : ''), 
          ...action.payload as CookbooksItem[]
        ]
      }
    case CookbooksActionTypes.FETCH_COOKBOOKS_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};
