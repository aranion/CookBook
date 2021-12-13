import { DescriptionRecipeProps } from "models/DescriptionRecipeProps";
import React from "react";
import styles from "./DescriptionRecipe.module.scss";
import img from "../../assets/recipeImgId00001.jpg";
import PrintIcon from "@mui/icons-material/Print";
import { RECIPES_LIST } from "../../constants/recipesList";
import { StepRecipe } from "../";
import { Ingredients } from "../../models/Recipe";

// пока пропсы не определены... временно
interface StepData {
  title: string;
  description: string;
  urlImg?: string;
}
//временные файлы(можно удалить после внесенных данных в стор)
const stepsData: Array<StepData> = [
  {
    title: "шаг 1",
    description: "Рыбное филе порезать на мелкие кусочки",
  },
  {
    title: "шаг 2",
    description:
      "Смешать соевый соус и кетчуп, посыпать измельченным чесноком. Соус поставить в холодильник  ",
  },
  {
    title: "шаг 3",
    description: "Рыбное филе обвалять в муке и соли. Обжарить на сковородке",
  },
];

export const DescriptionRecipe = (props: DescriptionRecipeProps) => {
  const {
    visible = false,
    title = "",
    idRecipe = "",
    footer = "",
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

  // или возвращаем верстку модального окна
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_header}>
          <h3 className={styles.modal_title}>{title}</h3>
          <span className={styles.modal_close} onClick={onClose}>
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
                {RECIPES_LIST[0].ingredients.map(
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
              <span>~{RECIPES_LIST[0].time} мин</span>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Количество персон:
              </h4>
              <span>2 персоны</span>
            </div>
            <div>
              <h4 className={styles["modal_body__left-title"]}>
                Разновидность блюда:
              </h4>
              <span>Веганская пища</span>
            </div>
          </div>
          <div className={styles.modal_body__right}>
            <div className={styles["modal_body__right-title"]}>
              <h3>{RECIPES_LIST[0].title}</h3>
              <PrintIcon />
            </div>
            <div className={styles["modal_body__right-line"]}></div>
            <div className={styles["modal_body__right-author"]}>
              <span className={styles.author}>
                Автор: <span>{RECIPES_LIST[0].author}</span>
              </span>
              <span>
                ID: <span>id_{idRecipe}</span>
              </span>
            </div>
            <div>
              <div className={styles["modal_body__right-process"]}>
                {stepsData.map((el) => {
                  return <StepRecipe key={el.title} stepData={el} />;
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
