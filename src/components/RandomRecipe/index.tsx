import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlatwareIcon from "@mui/icons-material/Flatware";
import MessageIcon from "@mui/icons-material/Message";
import { Loader, PrintElem } from "..";
import { Ingredients, IRecipe } from "../../models/Recipe";
import imgDefaultGB from "../../assets/cbDefault.jpg";
import styles from "./randomRecipe.module.scss";
import { useActions } from "hooks/useActions";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface PropsType {
  recipes: IRecipe[];
};

export const RandomRecipe = ({ recipes }: PropsType) => {

  const { setIsModal } = useActions();

  const onOpen = (idRecipe: string) => setIsModal(idRecipe);

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const recipe: IRecipe = recipes[ getRandomInt(0, recipes.length) ];

  if(!recipes || recipes.length === 0) return <div className={styles["recipe-block"]}>
    <Loader />
  </div>

  return (
    <div className={styles["recipe-block"]}>
      <div className={styles["recipe-block__left"]}>
        <img src={recipe?.urlImg || imgDefaultGB} alt={recipe?.title} />
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
        <h3 className={styles["recipe-block__header"]}>Случайный/Популярный рецепт</h3>
        <div className={styles["recipe-block__info"]}>
          <div className={styles["heading-container"]}>
            <span className={styles["heading-container__header"]}>
              {recipe?.title}
            </span>
            <PrintElem recipe={recipe}/>
          </div>
          <h4 className={styles["info-container_ingredients"]}>Ингредиенты:</h4>
          <ul>
            {recipe?.ingredients.map((item: Ingredients, i:number) => (
              <li key={i}>
                {item.ingredient} - {item.amount}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["recipe-block__right_added"]}>
          <div className={styles["recipe-block__right_added-author"]}>
            <AccountCircleIcon />
            <span>{recipe?.author.name}</span>
          </div>
          <Button size="small" onClick={() => onOpen(recipe.id)}>
            Посмотреть рецепт
          </Button> 
        </div>
      </div>
    </div>
  );
};
