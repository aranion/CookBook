import { Action, BookActionTypes, BookState } from "./types";
import imgDefaultGB from "../../assets/cbDefault.jpg";

const initialState: BookState = { 
  loading: false,
  cookbook: {
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
  },
  recipes: []
};

export const bookReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case BookActionTypes.START_BOOK:
      return {...state, loading: true}
    case BookActionTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state , 
        loading: false, 
        cookbook: {
          ...(action.payload as BookState).cookbook, 
          photo: (action.payload as BookState).cookbook?.photo !== '' 
          ? (action.payload as BookState).cookbook?.photo 
          : imgDefaultGB
        },
        recipes: [(action.payload as BookState).recipes.length !== 0 
          ? (action.payload as BookState).recipes.map(el => el)
          : []
        ]
      }
    case BookActionTypes.FETCH_BOOK_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};
