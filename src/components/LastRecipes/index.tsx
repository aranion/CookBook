import styles from "./lastRecipes.module.scss";
import { SmallRecipe } from "../";
import { IRecipe } from "models/Recipe";

export const LastRecipes = ({ recipes }: { recipes: IRecipe[] }) => {
    if(!recipes) return <div>Рецепты не подгружены</div>
    
  return (
    <div className={styles["last-recipes"]}>
      <h2>Последние рецепты</h2>
      <div className={styles["last-recipes__container"]}>
        {recipes && recipes?.map((el) => {
          return <SmallRecipe
            title={el?.title}
            author={el?.author.name}
            date={el?.createdAt as string}
            key={el?.id}
          />
        })}
      </div>
    </div>
  );
};
