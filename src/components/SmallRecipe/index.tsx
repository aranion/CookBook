import image from "../../assets/image4.png";
import styles from "./small-recipe.module.scss";

export const SmallRecipe = ({
  title,
  author,
  date,
}: {
  title: string;
  author: string;
  date: string;
}) => {
  return (
    <div className={styles["small-recipe"]}>
      <h3> {title}</h3>
      <img src={image} alt="" />
      <div className={styles["small-recipe__info"]}>
        <span>{date}</span>
        <span>{author}</span>
      </div>
    </div>
  );
};
