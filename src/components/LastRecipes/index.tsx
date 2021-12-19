import {useAppSelector} from 'store'
import styles from "./lastRecipes.module.scss";
import {SmallRecipe} from "../";
import {IRecipe} from "models/Recipe";
import {RECIPES_LIST} from "constants/recipesList"

export const LastRecipes = () => {
    let recipes = useAppSelector<IRecipe[]>(RootState => RootState.recipes.data)

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

