import { Recipe } from "../../components";
import styles from "../pages.module.scss";
import { IRecipe } from "models/Recipe";
import { RootState, useAppSelector } from "store";
import { LastRecipes } from "components/LastRecipes";

const Home = () => {
  const {data} = useAppSelector((state:RootState) => state.recipes);
  const {profile} = useAppSelector((state:RootState) => state);
  console.log('data = ',data);
  console.log('profile = ', profile);
  
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function lastElement() {
    let newArr:IRecipe[] = [];

    for (let i = data['length'] - 1; i > data['length'] - 4; i--) {
      newArr.push(data[i]);
    }
    return newArr;
  }

  const randomRecipe = data[getRandomInt(0, data['length'])];
  const lastRecipe = lastElement();
  return (
      <div className={styles.pages__center}>
        <Recipe recipe={randomRecipe} />
        <LastRecipes recipes={lastRecipe}/>
      </div>
  );
};

export default Home;
