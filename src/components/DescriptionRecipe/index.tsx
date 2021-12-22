import { DescriptionRecipeProps } from "models/DescriptionRecipeProps";
import React from "react";
import styles from "./DescriptionRecipe.module.scss";
import img from "../../assets/cbDefault.jpg";
import PrintIcon from "@mui/icons-material/Print";
import { Loader, StepRecipe } from "../";
import { Ingredients } from "../../models/Recipe";
import { Rating } from "@mui/material";

export const DescriptionRecipe = (props: DescriptionRecipeProps) => {
  const {
    visible,
    title,
    recipe,
    footer,
    onClose,
  } = props;
  
  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш. (ESC)
  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) return null;
  if(!recipe) return <Loader />

  // или возвращаем верстку модального окна
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h3 className={styles.modal_title}>{title}</h3>
        </div>
        <div className={styles.modal_body}>
          <div className={styles.modal_body__left}>
            <div className={styles['modal_body__left-wrapper-img']}>
              <img
              className={styles["modal_body__left-img"]}
              src={recipe.urlImg || img}
              alt={recipe.title}
            />
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>Ингредиенты:</h4>
              <ul>
                {recipe.ingredients.map((item: Ingredients, index: number) => (
                  <li key={index}>
                    {item.ingredient} - {item.amount}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Время приготовления:
              </h4>
              <span>~{recipe.time} мин</span>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Количество персон:
              </h4>
              <span>{recipe.portionsAmount} персоны</span>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Разновидность блюда:
              </h4>
              <span>{recipe.typeOfMeal}</span>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Стоимость:
              </h4>
              {recipe.cost} р.
            </div>
            <div>
              <Rating name="half-rating" defaultValue={recipe.rating} precision={0.5} readOnly />
            </div>
          </div>
          <div className={styles.modal_body__right}>
            <div className={styles["modal_body__right-title"]}>
              <h3>{recipe.title}</h3>
              <PrintIcon />
            </div>
            <div className={styles["modal_body__right-line"]}></div>
            <div className={styles["modal_body__right-author"]}>
              <span className={styles.author}>
                Автор: <span>{recipe.author.name}</span>
              </span>
              <span>
                ID: <span>id_{recipe.id}</span>
              </span>
            </div>
            <div>
              <div className={styles["modal_body__right-process"]}>
                {recipe.steps.map((el) => {
                  return <StepRecipe key={el.title} step={el} />;
                })}
              </div>
            </div>
          </div>
        </div>
        {footer && <div className={styles.modal_footer}>{footer}</div>}
      </div>
    </div>
  );
};
