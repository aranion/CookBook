import { Action, ModalState, ModalActionTypes } from "./types";

const initialState: ModalState = {
    isModal: false,
    idRecipe: ''
}

export const modalReducer = (state = initialState, action: Action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case ModalActionTypes.VISIBLE_MODAL:
            return {
                ...state,
                isModal: !state.isModal,
                idRecipe: action.payload
            }
        default:
            return state
    }
}