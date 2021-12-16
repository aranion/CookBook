import { DescriptionRecipeProps } from "models/DescriptionRecipeProps";
import React from "react";
import styles from "./DescriptionRecipe.module.scss";
import img from "../../assets/recipeImgId00001.jpg";
import PrintIcon from "@mui/icons-material/Print";
import { RECIPES_LIST } from "../../constants/recipesList";
import { StepRecipe } from "../";
import { Ingredients, StepData } from "../../models/Recipe";

export const DescriptionRecipe = (props: DescriptionRecipeProps) => {
  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        props.onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш. (ESC)
  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!props.visible) return null;

  // или возвращаем верстку модального окна
  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h3 className={styles.modal_title}>{props.title}</h3>
          <span className={styles.modal_close} onClick={props.onClose}>
            &times;
          </span>
        </div>
        <div className={styles.modal_body}>
          <div className={styles.modal_body__left}>
            <img
              className={styles["modal_body__left-img"]}
              src={img}
              alt="price"
            ></img>
            <div>
              <h4 className={styles["modal_body__left-title"]}>Ингридиенты:</h4>
              <ul>
                {props.recipe.ingredients.map(
                  (item: Ingredients, index: number) => (
                    <li key={index}>
                      {item.ingredient} - {item.amount}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Время приготовления:
              </h4>
              <span>~{props.recipe.time} мин</span>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Количество персон:
              </h4>
              <span>{props.recipe.portionsAmount} персоны</span>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Разновидность блюда:
              </h4>
              <span>{props.recipe.typeOfMeal}</span>
            </div>
          </div>
          <div className={styles.modal_body__right}>
            <div className={styles["modal_body__right-title"]}>
              <h3>{props.recipe.title}</h3>
              <PrintIcon />
            </div>
            <div className={styles["modal_body__right-line"]}></div>
            <div className={styles["modal_body__right-author"]}>
              <span className={styles.author}>
                Автор: <span>{props.recipe.author}</span>
              </span>
              <span>
                ID: <span>id_{props.recipe.id}</span>
              </span>
            </div>
            <div>
              <div className={styles["modal_body__right-process"]}>
                {RECIPES_LIST[0].stepsData.map((el) => {
                  return <StepRecipe key={el.title} steps={el} />;
                })}
              </div>
            </div>
          </div>
        </div>
        {props.footer && (
          <div className={styles.modal_footer}>{props.footer}</div>
        )}
      </div>
    </div>
  );
};
