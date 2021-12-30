import { useActions } from "hooks/useActions";
import { IRecipe } from "models/Recipe";
import image from "../../assets/cbDefault.jpg";
import styles from "./small-recipe.module.scss";

interface Props {
  recipe: IRecipe
};

export const SmallRecipe = (props: Props) => {
  const {
    title,
    author,
    createdAt,
    urlImg,
    id
  } = props.recipe;

  const { setIsModal } = useActions();
  const onOpen = (idRecipe: string) => setIsModal(idRecipe);

  return (
    <div className={styles["small-recipe"]} onClick={() => onOpen(id)}>
      <h3>{title}</h3>
      <div className={styles["small-recipe__wrapper"]} >
        <img className={styles["small-recipe__wrapper_img"]} src={urlImg || image} alt={title} />
      </div>
      <div className={styles["small-recipe__info"]}>
        <span>{createdAt}</span>
        <span>{author.name}</span>
      </div>
    </div>
  );
};
