export type Action = {
    type: string
    payload?: boolean | Error | number | string 
}

export interface ModalState {
    isModal: boolean;
    idRecipe: string
}

export enum ModalActionTypes {
    VISIBLE_MODAL = '@modal/VISIBLE_MODAL',
}

export type ModalAction =
    ModalActionTypes