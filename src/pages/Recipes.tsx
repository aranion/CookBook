import {useEffect} from 'react';
import {useActions} from 'hooks/useActions'
import {useAppSelector} from 'store'

import { IRecipe } from 'models/Recipe';
import { RecipeReviewCard } from 'components';
import styles from './pages.module.scss';


const Recipes = () => {
    const {fetchAllRecipes} = useActions()    // action Store recipe
    let recipes = useAppSelector(getRecipesByFilter)
    console.log(recipes)
    useEffect(() => {

        if(!recipes.length) fetchAllRecipes()   // получает рецепты и сразу пишет в стор
    },[recipes.length, fetchAllRecipes])


    return (
        <div className={styles.pages__center}>
            {recipes && recipes.map((recipe: IRecipe, idx: number) => {
                return <RecipeReviewCard key={idx} recipe={recipe}/>
            })}
        </div>
    );
};

export default Recipes;