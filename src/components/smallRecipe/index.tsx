import image from "../../assets/image4.png";
import styles from "./small-recipe.module.scss";

export const SmallRecipe = () => {
  return (
    <div className={styles['small-recipe']}>
      <h3> Макароны</h3>
      <img src={image} alt="" />
      <div className={styles['small-recipe__info']}>
        <span>29.11.2021</span>
        <span>Cooker</span>
      </div>
    </div>
  );
};
