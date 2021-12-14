import { Recipe } from "../../components";
import { SmallRecipe } from "../../components";
import styles from "./home.module.scss";
import { RECIPES_LIST } from "../../constants/recipesList";

const Home = () => {
  return (
      <div className={styles.center}>
        <Recipe recipe={RECIPES_LIST[0]} />
        <div className={styles["home__last-recipes"]}>
          <h2>Последние рецепты</h2>
          <div className={styles["last-recipes__container"]}>
            <SmallRecipe
              title={"Макарон"}
              author={"Cooker"}
              date={"30.11.2021"}
            />
            <SmallRecipe
              title={"Макарон"}
              author={"Cooker"}
              date={"30.11.2021"}
            />
            <SmallRecipe
              title={"Макарон"}
              author={"Cooker"}
              date={"30.11.2021"}
            />
          </div>
        </div>
      </div>
  );
};

export default Home;
