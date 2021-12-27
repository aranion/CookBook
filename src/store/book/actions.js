import { GET_BOOK } from "./types";
import { $api } from "../../api/api";

export const getBook = (data) => {
  try {
    return {
      type: GET_BOOK,
      payload: data,
    };
  } catch (e) {
    console.log(e);
  }
};
