export interface IRecipe {
  id: string;
  title: string;
  ingredients: Array<Ingredients>;
  description: string;
  author: string;
  time: number;
  typeOfMeal: string; // тип трапезы
  cost: number; // затраты
  dateCreation: string // дата создания рецепта
}

export interface Ingredients {
  ingredient: string;
  amount: string;
}
