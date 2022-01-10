export interface Ingredients {
  description: string;
  count: string;
  placeholder?: string // нужен для удаления нужного ингридиента
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
  _id: string;
  title: string;
  private: false;
  description: string;  // краткое описание
  ingredients: Array<Ingredients>;
  steps: Array<StepData>;
  author: IAuthor;
  // author: string;
  time: number;
  urlImg?: string;
  cuisine?: string;   // кухня мира/категория (европа, азия...
  typeOfMeal?: string; // тип трапезы
  kindOfFood?: string;
  portionsAmount?: number;
  cost?: number; // затраты
  createdAt: string; // дата создания рецепта
  rating: number // рейтинг
}