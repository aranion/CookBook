import { Action, BookActionTypes, BookItem, BookState } from "./types";
import imgDefaultGB from "../../assets/cbDefault.jpg";

const initialState: BookState = { 
  loading: false,
  data: {
    title: '',
    _id: '',
    photo: '',
    description: '',
    ingredients: [],
    createdAt: '',
    recipesId: [],
    updatedAt: '',
    user: '',
    __v: 0
  }
};

export const bookReducer = (state = initialState, action: Action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case BookActionTypes.START_BOOK:
      return {...state, loading: true}
    case BookActionTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state , 
        loading: false, 
        data: {
          ...(action.payload as BookItem), 
          photo: (action.payload as BookItem).photo !== '' 
          ? (action.payload as BookItem).photo 
          : imgDefaultGB
        }
      }
    case BookActionTypes.FETCH_BOOK_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};
