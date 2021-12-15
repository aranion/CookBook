import styles from "./lastRecipes.module.scss";
import { SmallRecipe } from "../";
import { IRecipe } from "models/Recipe";

export const LastRecipes = ({ recipes }: { recipes: IRecipe[] }) => {
  return (
    <div className={styles["last-recipes"]}>
      <h2>Последние рецепты</h2>
      <div className={styles["last-recipes__container"]}>
        {recipes.map(el => {
          return <SmallRecipe
            title={el.title}
            author={el.author}
            date={el.dateCreation}
            key={el.id}
          />
        })}
      </div>
    </div>
  );
};
