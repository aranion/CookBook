import { useEffect } from 'react';
import { useActions } from 'hooks/useActions'
import { useAppSelector } from 'store'
import { IRecipe } from 'models/Recipe';
import { Loader, RecipeCard } from 'components';
import styles from './pages.module.scss';
import { Pagination } from '@mui/material';
import { RecipeState } from 'store/recipe/types';

const Recipes = () => {

    const { fetchAllRecipes } = useActions();    // action Store recipe

    const recipes = useAppSelector((state) =>{ 
        return state.recipes.data.filter((item: IRecipe) =>
            item.title.indexOf(state.recipes.filter) !== -1)
    });

    const { loading, maxItemsPage, data } = useAppSelector(state => (state.recipes as RecipeState));

    useEffect(() => {
        if(!recipes.length) fetchAllRecipes();   // получает рецепты и сразу пишет в стор
    },[recipes.length ])

    return (
        <>
            <div className={styles.pages__center}>
                {loading 
                    ? <Loader /> 
                    : recipes && recipes.map((recipe: IRecipe, idx: number) => {
                    return <RecipeCard key={idx} recipe={recipe}/>
                })}
            </div>
            <div className={styles.pages__center}>
                <Pagination sx={{ 
                    width: 800, 
                    margin: '-20px auto 0',
                    display: 'flex', 
                    justifyContent: 'center',
                    borderRadius: '12px',
                    background: '#f4f4f4', 
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)', 
                }}     
                count={Math.ceil(data.length / maxItemsPage)} 
                variant="text" 
                shape="rounded" />
            </div>
        </>
    );
};

export default Recipes;