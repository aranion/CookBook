import { ReactElement } from "react";
import { IRecipe } from "./Recipe";

export interface DescriptionRecipeProps {
  visible: boolean;
  title: string;
  recipe: IRecipe;
  footer: ReactElement | string;
  onClose: () => void;
}
