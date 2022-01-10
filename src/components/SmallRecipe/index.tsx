import { useActions } from "hooks/useActions";
import { IRecipe } from "models/Recipe";
import image from "../../assets/cbDefault.jpg";
import { DateCreate } from "./DateCreate";
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
    _id
  } = props.recipe;

  const { setIsModal } = useActions();
  const onOpen = (idRecipe: string) => setIsModal(idRecipe);
  
  return (
    <div className={styles["small-recipe"]} onClick={() => onOpen(_id)}>
      <h3>{title}</h3>
      <div className={styles["small-recipe__wrapper"]} >
        <img className={styles["small-recipe__wrapper_img"]} src={urlImg || image} alt={title} />
      </div>
      <div className={styles["small-recipe__info"]}>
        <DateCreate date={createdAt} />
        <span>{author?.name || 'Автор не указан...'}</span>
      </div>
    </div>
  );
};
