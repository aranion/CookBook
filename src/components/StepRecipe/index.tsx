import styles from "./StepRecipe.module.scss";
import img from '../../assets/recipeImgId00001.jpg';

// временно any, потом нужно проработать структуру пропсов
export const StepRecipe = (props: any) => {
  const {
    title = '',
    description = '',
    urlImg = '',
  } = props.stepData;

  return <div className={styles.step} >
    <img className={styles.step_img} src={urlImg || img} alt='Recipe'></img>
    <div>
      <h5 className={styles.step_title}>{title}</h5>
      <div>{description}</div>
    </div>
  </div>
}
