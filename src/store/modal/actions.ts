import { ModalActionTypes } from './types'

export const setIsModal = (idRecipe: string) => ({
    type: ModalActionTypes.VISIBLE_MODAL,
    payload: idRecipe
});

