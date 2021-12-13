import { ReactElement } from "react";

export interface DescriptionRecipeProps {
    visible: boolean
    title: string
    idRecipe: ReactElement | string
    footer: ReactElement | string
    onClose: () => void
}