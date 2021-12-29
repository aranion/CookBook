import styles from "./StepRecipe.module.scss";
import img from "../../assets/cbDefault.jpg";
import { StepData } from "../../models/Recipe";

interface PropsType { 
  step: StepData 
}

export const StepRecipe = ({ step }: PropsType) => {
  return (
    <div className={styles.step}>
      <img
        className={styles.step_img}
        src={step.urlImg || img}
        alt={step.title}
      />
      <div>
        <h5 className={styles.step_title}>{step.title}</h5>
        <div>{step.description}</div>
      </div>
    </div>
  );
};
