import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlatwareIcon from "@mui/icons-material/Flatware";
import MessageIcon from "@mui/icons-material/Message";
import { PrintElem } from "..";
import { Ingredients, IRecipe } from "../../models/Recipe";
import imgDefaultGB from "../../assets/cbDefault.jpg";
import styles from "./randomRecipe.module.scss";
import { useActions } from "hooks/useActions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const RandomRecipe = ({ recipe }: { recipe: IRecipe }) => {
  const { setIsModal } = useActions();

  const onOpen = (idRecipe: string) => setIsModal(idRecipe);

  return (
    <div className={styles["recipe-block"]}>
      <div className={styles["recipe-block__left"]}>
        <img
          // TODO 'src' тут заглушка для показа фотографий не с сервера, необходимо убрать при работе на сервере
          src={
            recipe.urlImg
              ? "/img/" +
                recipe.urlImg.split("/")[recipe.urlImg?.split("/").length - 1]
              : imgDefaultGB
          }
          alt={recipe?.title}
        />
        <div className={styles["recipe-block__meta"]}>
          <div>
            <AccessTimeIcon />
            <span>{recipe?.time}&nbsp;мин.</span>
          </div>
          <div>
            <FlatwareIcon />
            <span>{recipe?.portionsAmount}</span>
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
        <h3 className={styles["recipe-block__header"]}>Лучшие рецепты</h3>
        <div className={styles["recipe-block__info"]}>
          <div className={styles["heading-container"]}>
            <span className={styles["heading-container__header"]}>
              {recipe?.title}
            </span>
            <PrintElem recipe={recipe} />
          </div>
          <h4 className={styles["info-container_ingredients"]}>Ингредиенты:</h4>
          <ul>
            {recipe?.ingredients.map((item: Ingredients, i: number) => (
              <li key={i}>
                {item.description} - {item.count}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["recipe-block__right_added"]}>
          <div className={styles["recipe-block__right_added-author"]}>
            <AccountCircleIcon />
            <span>{recipe?.author || "Автор не указан..."}</span>
          </div>
          <Button size="small" onClick={() => onOpen(recipe._id)}>
            Посмотреть рецепт
          </Button>
        </div>
      </div>
    </div>
  );
};
