import { useEffect } from 'react';
import {useActions} from 'hooks/useActions'
import {useAppSelector} from 'store'
import { IRecipe } from 'models/Recipe';
import { RecipeReviewCard } from 'components';

const Recipes = () => {
    const {fetchAllRecipes} = useActions()    // action Store recipe
    let recipes = useAppSelector((state) =>
        state.recipes.data.filter((item: IRecipe) =>
            item.title.indexOf(state.recipes.filter) !== -1))

    useEffect(() => {
        if(!recipes.length) fetchAllRecipes()   // получает рецепты и сразу пишет в стор
    },[])

    return (
        <div>
            <p>Рецепты</p>
            {recipes && recipes.map((recipe: IRecipe, idx: number) => {
                return <RecipeReviewCard key={idx} recipe={recipe}/>
            })}
        </div>
    );
};

export default Recipes;