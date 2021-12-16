import { useEffect } from 'react';
import {useActions} from 'hooks/useActions'
import {useAppSelector} from 'store'

const Recipes = () => {
    const {fetchAllRecipes} = useActions()    // action Store recipe

    useEffect( () => {
        fetchAllRecipes()   // получает рецепты и сразу пишет в стор
    },[])

    const {data} = useAppSelector(store => store.recipes)
    console.log(data)

    return (
        <div>
            Рецепты
        </div>
    );
};

export default Recipes;