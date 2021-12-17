export interface Ingredients {
  ingredient: string;
  amount: string;
}

export interface StepData {
  title: string;
  description: string;
  urlImg?: string;
}

export interface IRecipe {
  id: string;
  title: string;
  ingredients: Array<Ingredients>;
  stepsData: Array<StepData>;
  author: string;
  time: number;
  urlRecipeImg?: string;
  typeOfMeal: string; // тип трапезы
  portionsAmount: number;
  cost: number; // затраты
  dateCreation: string; // дата создания рецепта
}
