import styles from "./StepRecipe.module.scss";
import img from "../../assets/recipeImgId00001.jpg";
import { StepData } from "../../models/Recipe";

export const StepRecipe = ({ steps }: { steps: StepData }) => {
  return (
    <div className={styles.step}>
      <img
        className={styles.step_img}
        src={steps.urlImg || img}
        alt="Recipe"
      ></img>
      <div>
        <h5 className={styles.step_title}>{steps.title}</h5>
        <div>{steps.description}</div>
      </div>
    </div>
  );
};
