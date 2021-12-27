import { GET_BOOK } from "./types";

const initialState = { book: {} };

export const bookReducer = (state = initialState, actions) => {
  console.log("reducer book: ", actions);
  switch (actions.type) {
    case GET_BOOK:
      return {
        ...state,
        book: actions.payload,
      };
    default:
      return state;
  }
};
