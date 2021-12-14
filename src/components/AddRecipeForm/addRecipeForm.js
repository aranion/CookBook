import { Button, Input } from "@mui/material";
import style from "./addRecipeForm.module.scss";
import { StepsList } from "./StepsList";
import { IngredientList } from "./IngredientList";
import { useState } from "react";

export const AddRecipeForm = () => {
  const [nameRecipe, setNameRecipe] = useState("");
  const handleNameRecipe = (e) => {
    setNameRecipe(e.target.value);
  };
  return (
    <div className={style.form}>
      <h1 className={style.title}>Новый рецепт</h1>
      <form>
        <Input
          placeholder={"Название рецепта"}
          value={nameRecipe}
          onChange={(e) => handleNameRecipe(e)}
          fullWidth={true}
          inputProps={{ "aria-label": "description" }}
        />
        <div className={style.cooking}>
          <div className={style.cooking__left}>
            <IngredientList />
          </div>
          <div className={style.cooking__right}>
            <h2 className={style.cooking__heading}>Процесс приготовления:</h2>
            <div className={style.cooking__steps}>
              <StepsList />
            </div>
          </div>
        </div>
        <div className={style.photoRecipe__container}>
          <div className={style.photoRecipe}>
            <img src="*" alt="recipe" />
          </div>
        </div>
        <div className={style.form__send}>
          <div className={style.form__confirm}>
            <Button variant="contained" color="primary">
              Ок
            </Button>
          </div>
          <div className={style.form__cancel}>
            <Button variant="contained" color="primary">
              Отмена
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
