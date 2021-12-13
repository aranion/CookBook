import styles from "./recipe.module.scss";
import image from "../../assets/image2.png";
import PrintIcon from "@mui/icons-material/Print";
import React from "react";
import { DescriptionRecipe } from "../../components";

export const Recipe = () => {
  const author = "Cooker";

  const [isModal, setModal] = React.useState(false)
  const onClose = () => setModal(false)

  return (
    <div className={styles['recipe-block']}>
      <h3 className={styles['recipe-block__header']}>Случайный рецепт</h3>
      <div className={styles['recipe-block__info']}>
        <img src={image} alt="" />
        <div className={styles['info-container']}>
          <div className={styles['info-container__list']}>
            <div className={styles['heading-container']}>
              <span className={styles['heading-container__header']}>
                Картофель жареный
              </span>
              <PrintIcon />
            </div>
            <ul>
              <li>Картоха</li>
              <li>Лук</li>
              <li>Масло</li>
            </ul>
            <span>~48 min</span>

            <div className={styles['info-container__added']}>
              <span className={styles['info-container__added-author']}>{author}</span>
              <button onClick={() => setModal(true)}>Посмотреть рецепт...</button>
              <DescriptionRecipe
                  visible={isModal}
                  title="Подробности рецепта"
                  idRecipe={'0000001'}
                  footer={<button onClick={onClose}>Закрыть</button>}
                  onClose={onClose}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
