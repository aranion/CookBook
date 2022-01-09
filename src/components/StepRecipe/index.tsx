import styles from "./StepRecipe.module.scss";
import img from "../../assets/cbDefault.jpg";
import { StepData } from "../../models/Recipe";

interface PropsType { 
  step: StepData;
  index: number;
}

export const StepRecipe = ({ step, index }: PropsType) => {
  return (
    <div className={styles.step}>
      <img
        className={styles.step_img}
        src={step.urlImg || img}
        alt={step.title}
      />
      <div>
        <h5 className={styles.step_title}>{step.title || `Шаг ${index+1}`}</h5>
        <div>{step.description}</div>
      </div>
    </div>
  );
};
