import {IRecipe} from "models/Recipe";
import {useEffect} from "react";
import {RootState, useAppSelector} from "store";
import { useActions } from 'hooks/useActions';
import {Recipe, LastRecipes, RecipeReviewCard} from "components";
import styles from "./home.module.scss";

import {RECIPES_LIST} from "constants/recipesList"

const Home = () => {
    // const {fetchAllRecipes} = useActions()
    //
    // useEffect(()=> {
    //     fetchAllRecipes()
    // }, [])
    //
    // let recipes = useAppSelector((state) =>
    //         state.recipes.data.filter((item: IRecipe) =>
    //             item.title.indexOf(state.recipes.filter) !== -1
    //         ))
    // console.log("Home", recipes)
    const {profile} = useAppSelector((state: RootState) => state)

    // function getRandomInt(min: number, max: number) {
    //   min = Math.ceil(min);
    //   max = Math.floor(max);
    //   return Math.floor(Math.random() * (max - min)) + min;
    // }
    // function lastElement() {
    //   let newArr:IRecipe[] = [];
    //
    //   for (let i = data['length'] - 1; i > data['length'] - 4; i--) {
    //     newArr.push(data[i]);
    //   }
    //   return newArr;
    // }

    // const randomRecipe = data[getRandomInt(0, data['length'])];
    // const lastRecipe = lastElement();
    return (
        <div className={styles.center}>
            {/*<Recipe recipe={randomRecipe} />*/}
            <LastRecipes/>
        </div>
    );
};

export default Home;
