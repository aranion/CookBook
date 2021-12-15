import React from "react";
import PrintIcon from "@mui/icons-material/Print";
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlatwareIcon from '@mui/icons-material/Flatware';
import MessageIcon from '@mui/icons-material/Message';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DescriptionRecipe } from "..";
import { Ingredients, IRecipe } from "../../models/Recipe";
import image from "../../assets/image2.png";
import styles from "./randomRecipe.module.scss";

export const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  const [isModal, setModal] = React.useState(false);
  const onClose = () => setModal(false);

  return (
    <div className={styles["recipe-block"]}>
      <h3 className={styles["recipe-block__header"]}>Случайный рецепт</h3>
      <div className={styles["recipe-block__info"]}>
        <div>
          <img src={image} alt="" />
          <div>
            <div className={styles["recipe-block__meta"]}>
              <div>
                <span>
                  <AccessTimeIcon />
                  <span>30&nbsp;мин.</span>
                </span>
                <span >
                  <FlatwareIcon />
                  <span>2</span>
                </span>
              </div>
              <div >
                <span >
                  <MessageIcon />
                  <span>1</span>
                </span>
                <span>
                  <VisibilityIcon/> 
                  <span>2.1к.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["info-container"]}>
          <div className={styles["heading-container"]}>
            <span className={styles["heading-container__header"]}>
              {recipe.title}
            </span>
            <PrintIcon />
          </div>
          <ul>
            {recipe.ingredients.map((item: Ingredients, index) => (
              <li key={index}>
                {item.ingredient} - {item.amount}
              </li>
            ))}
          </ul>
          <span>~{recipe.time} мин</span>
          <div className={styles["info-container__added-author"]}>
            <AccountCircleIcon />
            <span>
              {recipe.author}
            </span>
          </div>
          <div className={styles["info-container__added"]}>
            <Button variant="contained" color="primary" onClick={() => setModal(true)}>
              Посмотреть рецепт...
            </Button>
            <DescriptionRecipe
              visible={isModal}
              title="Подробности рецепта"
              idRecipe={recipe.id}
              footer={<Button variant="contained" color="primary" onClick={onClose}>Закрыть</Button>}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
