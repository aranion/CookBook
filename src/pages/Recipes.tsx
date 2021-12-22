import { useEffect } from 'react';
import {useActions} from 'hooks/useActions'
import {useAppSelector} from 'store'
import { IRecipe } from 'models/Recipe';
import { Loader, RecipeReviewCard } from 'components';
import styles from './pages.module.scss';

const Recipes = () => {
    const {fetchAllRecipes} = useActions()    // action Store recipe
    const recipes = useAppSelector((state) =>
        state.recipes.data.filter((item: IRecipe) =>
            item.title.indexOf(state.recipes.filter) !== -1))
    const isLoading = useAppSelector(state => state.recipes.loading);

    useEffect(() => {
        if(!recipes.length) fetchAllRecipes()   // получает рецепты и сразу пишет в стор
    },[recipes.length,fetchAllRecipes])

    return (
        <div className={styles.pages__center}>
            {isLoading 
                ? <Loader /> 
                : recipes && recipes.map((recipe: IRecipe, idx: number) => {
                return <RecipeReviewCard key={idx} recipe={recipe}/>
            })}
        </div>
    );
};

export default Recipes;