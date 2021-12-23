import {useAppSelector} from 'store'
import styles from "./lastRecipes.module.scss";
import {Loader, SmallRecipe} from "../";
import {IRecipe} from "models/Recipe";

export const LastRecipes = () => {
    let recipes = useAppSelector<IRecipe[]>(RootState => RootState.recipes.data)
    if(!recipes || recipes.length === 0) return <div className={styles["last-recipes"]}>
        <Loader />
    </div>

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

