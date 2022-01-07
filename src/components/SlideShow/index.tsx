import Carousel from "react-material-ui-carousel";
import { RandomRecipe, Loader } from "..";
import { IRecipe } from "../../models/Recipe";
import styles from "./slideShow.module.scss";

export const SlideShow = ({ recipes }: { recipes: IRecipe[] }) => {
  if (!recipes || recipes.length === 0)
    return (
      <div className={styles["slide-show-block"]}>
        <Loader />
      </div>
    );
  return (
    <Carousel>
      {recipes.map((recipe, i) => (
        <RandomRecipe recipe={recipe} key={i} />
      ))}
    </Carousel>
  );
};
