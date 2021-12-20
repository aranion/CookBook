import React from "react";
import PrintIcon from "@mui/icons-material/Print";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlatwareIcon from "@mui/icons-material/Flatware";
import MessageIcon from "@mui/icons-material/Message";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DescriptionRecipe } from "..";
import { Ingredients, IRecipe } from "../../models/Recipe";
import image from "../../assets/recipeRandom.jpg";
import styles from "./randomRecipe.module.scss";

export const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  const [isModal, setModal] = React.useState(false);
  const onClose = () => setModal(false);

  return (
    <div className={styles["recipe-block"]}>
      <div className={styles["recipe-block__left"]}>
        <img src={recipe.urlImg || image} alt={recipe.title} />
        <div className={styles["recipe-block__meta"]}>
          <div>
            <AccessTimeIcon />
            <span>{recipe.time}&nbsp;мин.</span>
          </div>
          <div>
            <FlatwareIcon />
            <span>{recipe.portionsAmount}</span>
          </div>
          <div>
            <MessageIcon />
            <span>1</span>
          </div>
          <div>
            <VisibilityIcon />
            <span>2.1к.</span>
          </div>
        </div>
      </div>
      <div className={styles["recipe-block__right"]}>
        <h3 className={styles["recipe-block__header"]}>Случайный рецепт</h3>
        <div className={styles["recipe-block__info"]}>
          <div className={styles["heading-container"]}>
            <span className={styles["heading-container__header"]}>
              {recipe.title}
            </span>
            <PrintIcon />
          </div>
          <h4 className={styles["info-container_ingredients"]}>Ингредиенты:</h4>
          <ul>
            {recipe.ingredients.map((item: Ingredients, index) => (
              <li key={index}>
                {item.ingredient} - {item.amount}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["recipe-block__right_added"]}>
          <div className={styles["recipe-block__right_added-author"]}>
            <AccountCircleIcon />
            <span>{recipe.author}</span>
          </div> 
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setModal(true)}
          >
            Посмотреть рецепт
          </Button>
          <DescriptionRecipe
            visible={isModal}
            title="Подробности рецепта"
            recipe={recipe}
            footer={
              <Button variant="contained" color="primary" onClick={onClose}>
                Закрыть
              </Button>
            }
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};
