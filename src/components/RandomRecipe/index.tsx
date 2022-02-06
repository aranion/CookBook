import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlatwareIcon from "@mui/icons-material/Flatware";
import MessageIcon from "@mui/icons-material/Message";
import { PrintDownloadElem } from "..";
import { Ingredients, IRecipe } from "../../models/Recipe";
import imgDefaultGB from "../../assets/cbDefault.jpg";
import styles from "./randomRecipe.module.scss";
import { useActions } from "hooks/useActions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const RandomRecipe = ({ recipe }: { recipe: IRecipe }) => {
  const { setIsModal } = useActions();

  const onOpen = (idRecipe: string) => setIsModal(idRecipe);

  const checkValue = (value: string | number | undefined) => {
    return value !== 0 || value ? value : '-';
  }

  return (
    <div className={styles["recipe-block"]}>
      <div className={styles["recipe-block__left"]}>
        <img
          src={ recipe.urlImg || imgDefaultGB }
          alt={recipe?.title}
        />
        <div className={styles["recipe-block__meta"]}>
          <div>
            <AccessTimeIcon />
            <span>{checkValue(recipe?.time)}</span>
          </div>
          <div>
            <FlatwareIcon />
            <span>{checkValue(recipe?.portionsAmount)}</span>
          </div>
          <div>
            <MessageIcon />
            <span>1</span>
          </div>
          <div>
            <ThumbUpIcon />
            <span>2.1к.</span>
          </div>
        </div>
      </div>
      <div className={styles["recipe-block__right"]}>
        <div className={styles["recipe-block__info"]}>
          <div className={styles["heading-container"]}>
            <span className={styles["heading-container__header"]}>
              {recipe?.title}
            </span>
            <PrintDownloadElem recipe={recipe} isPrint={true}/>
          </div>
          <div className={styles["recipe-block__description"]}>
            {recipe?.description}
          </div>
          <h4 className={styles["info-container_ingredients"]}>Ингредиенты:</h4>
          <ul>
            {recipe?.ingredients.map((item: Ingredients, i: number) => {
                if (i < 7) {
                  return <li key={i}>
                    {item.description} - {item.count}
                  </li>
                }
                return ''
              }
            )}
            { recipe?.ingredients.length > 7 ? <li>...</li> : ''}
          </ul>
        </div>
        <div className={styles["recipe-block__right_added"]}>
          <div className={styles["recipe-block__right_added-author"]}>
            <AccountCircleIcon />
            <span>{recipe?.author?.name || "Автор не указан..."}</span>
          </div>
          <Button size="small" onClick={() => onOpen(recipe._id)}>
            Посмотреть рецепт
          </Button>
        </div>
      </div>
    </div>
  );
};
