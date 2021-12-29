import styles from "./lastRecipes.module.scss";
import { Loader, SmallRecipe } from "../";
import { IRecipe } from "models/Recipe";

interface PropsType {
    recipes: IRecipe[]
};

export const LastRecipes = ({ recipes }: PropsType) => {
    
    if(!recipes || recipes.length === 0) return <div className={styles["last-recipes"]}>
        <Loader />
    </div>

    return (
        <div className={styles["last-recipes"]}>
            <h2>Последние рецепты</h2>
            <div className={styles["last-recipes__container"]}>
                {recipes && recipes?.map((el) => {
                    return <SmallRecipe recipe={el} key={el.id}/>
                })}
            </div>
        </div>
    );
};

