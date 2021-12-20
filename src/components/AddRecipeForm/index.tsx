import { Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, TextareaAutosize, TextField } from "@mui/material";
import styles from "./addRecipeForm.module.scss";
import { StepsList } from "./StepsList";
import { IngredientList } from "./IngredientList";
import { useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const AddRecipeForm = () => {
  const [nameRecipe, setNameRecipe] = useState("");
  const handleNameRecipe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameRecipe((e.target as HTMLDataElement).value);
  };
  return (
    <div className={styles.form}>
      <h1 className={styles.form__title}>Новый рецепт</h1>
      <form className={styles.form__col}>
        <div className={styles.form__row}>
          <div className={styles.form__left}>
            <div className={styles["form__left_container"]}>
              <div className={styles["form__left_photoRecipe"]}>
                <AddPhotoAlternateIcon />
              </div>
              <Button 
                sx={{width: '100%', position: 'absolute', bottom: 0 }} 
                variant="contained" 
                color="primary"
              >
                Загрузить фото
              </Button>
            </div>
          </div>
          <div className={styles.form__right}>
            <div className={styles.form__right_title}>
              <Input
                placeholder={"Название рецепта"}
                value={nameRecipe}
                required={true}
                onChange={handleNameRecipe}
                fullWidth={true}
                inputProps={{ "aria-label": "description" }}
              />
            </div>
            <div className={styles.form__right_description}>
              <TextareaAutosize
                minRows={1}
                required={true}
                placeholder="Введите информацию о рецепте..."
                style={{ width: "100%", height: 130, border: '1px solid grey', resize: 'none', boxSizing: "border-box"}}
              />
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Могут ли другие просматривать данный рецепт?</FormLabel>
                <RadioGroup row aria-label="checked" defaultValue="yes" name="row-radio-buttons-group">
                  <FormControlLabel value="yes" control={<Radio />} label="Да" />
                  <FormControlLabel value="no" control={<Radio />} label="Нет" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={`${styles.form__left} ${styles.cooking__left}`}>
            <IngredientList />
          </div>
          <div className={`${styles.form__right} ${styles.cooking__right}`}>
            <h4 className={styles.cooking__heading}>Процесс приготовления:</h4>
            <div className={styles.cooking__steps}>
              <StepsList />
            </div>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__details_col}>
            <div className={styles.form__details_row}>
              <TextField 
                label="Стоимость" 
                variant="standard" 
                fullWidth 
                type='number'
              />
            </div>
            <div className={styles.form__details_row}>
              <TextField 
                label="Время приготовления(мин)" 
                variant="standard" 
                fullWidth 
                type='number'
              />
            </div>
          </div>
          <div className={styles.form__details_col}>
            <div className={styles.form__details_row}>
              <TextField 
                label="Персон" 
                variant="standard" 
                fullWidth 
                type='number'
              />
            </div>
            <div className={styles.form__details_row}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-label-typeCuisine">Тип кухни</InputLabel>
                <Select
                  labelId="select-label-typeCuisine"
                  label="Тип кухни"
                  value={10}
                >
                  <MenuItem value={10}>Мясо/Птица</MenuItem>
                  <MenuItem value={20}>Морепродукты</MenuItem>
                  <MenuItem value={30}>Вегетарианская</MenuItem>
                  <MenuItem value={40}>Веганская</MenuItem>
                  <MenuItem value={50}>Другая</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={styles.form__details_col}>
            <div className={styles.form__details_row}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-label-typeOfMeal">Трапеза</InputLabel>
                <Select
                  labelId="select-label-typeOfMeal"
                  label="Трапеза"
                  value={10}
                >
                  <MenuItem value={10}>Завтрак</MenuItem>
                  <MenuItem value={20}>Обед</MenuItem>
                  <MenuItem value={30}>Ужин</MenuItem>
                  <MenuItem value={40}>Другое</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles.form__details_row}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-label-kindOfFood">Вид пищи</InputLabel>
                <Select
                  labelId="select-label-kindOfFood"
                  label="Вид пищи"
                  value={10}
                >
                  <MenuItem value={10}>Закуск</MenuItem>
                  <MenuItem value={20}>Салаты</MenuItem>
                  <MenuItem value={30}>Супы</MenuItem>
                  <MenuItem value={40}>Вторые</MenuItem>
                  <MenuItem value={50}>Выпечк</MenuItem>
                  <MenuItem value={60}>Напитк</MenuItem>
                  <MenuItem value={70}>Соусы</MenuItem>
                  <MenuItem value={80}>Другое</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={`${styles.form__row} ${styles.form__send}`}>
            <Button variant="contained" color="primary" style={{ width: 100}}>
              Создать
            </Button>
            <Button variant="contained" color="primary" style={{ width: 100}}>
              Отмена
            </Button>
        </div>
      </form>
    </div>
  );
};
