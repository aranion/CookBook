import styles from "./StepRecipe.module.scss";
import img from "../../assets/cbDefault.jpg";
import { StepData } from "../../models/Recipe";

export const StepRecipe = ({ step }: { step: StepData }) => {
  return (
    <div className={styles.step}>
      <img
        className={styles.step_img}
        src={step.urlImg || img}
        alt={step.title}
      ></img>
      <div>
        <h5 className={styles.step_title}>{step.title}</h5>
        <div>{step.description}</div>
      </div>
    </div>
  );
};
