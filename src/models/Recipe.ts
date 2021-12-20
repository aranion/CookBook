export interface Ingredients {
  ingredient: string;
  amount: string;
}

export interface StepData {
  title: string;
  description: string;
  urlImg?: string;
}

interface IAuthor {
  id: string;  // id user - привязка к создателю
  name: string  // Для отображения инфы
}
export interface IRecipe {
  // Все правки согласовывайте!!! такая модель сформирована в АПИ на сервере
  id: string;
  title: string;
  description: string;  // краткое описание
  ingredients: Array<Ingredients>;
  steps: Array<StepData>;
  author: IAuthor;
  time: number;
  urlImg?: string;
  cuisine: string;   // кухня мира/категория (европа, азия...
  typeOfMeal: string; // тип трапезы
  portionsAmount: number;
  cost: number; // затраты
  createdAt?: string; // дата создания рецепта
  rating: number // рейтинг
}
// конфликт, нужно удалить после проверки
// export interface Ingredients {
//   ingredient: string;
//   amount: string;
// }
// 
// export interface StepData {
//   title: string;
//   description: string;
//   urlImg?: string;
// }
// 
// export interface IRecipe {
//   id: string;
//   title: string;
//   ingredients: Array<Ingredients>;
//   stepsData: Array<StepData>;
//   author: string;
//   time: number;
//   urlRecipeImg?: string;
//   typeOfMeal: string; // тип трапезы
//   portionsAmount: number;
//   cost: number; // затраты
//   dateCreation: string; // дата создания рецепта
// }