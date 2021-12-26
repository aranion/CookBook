import { Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextareaAutosize, TextField } from "@mui/material";
import styles from "./addRecipeForm.module.scss";
import { StepsList } from "./StepsList";
import { IngredientList } from "./IngredientList";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useAppSelector } from "store";
import { AddRecipeState} from "store/addRecipe/types";
import { IRecipe } from "models/Recipe";
import { useActions } from "hooks/useActions";

export const AddRecipeForm = () => {
  const {
    addRecipe, 
    setInpuTitleRecipe,
    setDescriptionRecipe,
    setIsPrivatRecipe,
    setCostRecipe,
    setCookingTime,
    setPersons,
    setTypeCuisine,
    setTypeOfMeal,
    setKindOfFood,
    cleanForm,
  } = useActions(); 

  const {inputFields, dataSelectForm} = useAppSelector(state => (state.addRecipe as AddRecipeState));

  const handleTitleRecipe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpuTitleRecipe((e.target as HTMLDataElement).value);
  };
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionRecipe((e.target as HTMLDataElement).value);
  };
  const handleIsPrivat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivatRecipe(!!(e.target as HTMLDataElement).value);
  };
  const handleCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCostRecipe(Number((e.target as HTMLDataElement).value));
  };
  const handleCookingTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCookingTime(Number((e.target as HTMLDataElement).value));
  };
  const handlePersons = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersons(Number((e.target as HTMLDataElement).value));
  };
  const handleTypeCuisine = (e: SelectChangeEvent<string>) => {
    setTypeCuisine((e.target as HTMLDataElement).value);
  };
  const handleTypeOfMeal = (e: SelectChangeEvent<string>) => {
    setTypeOfMeal((e.target as HTMLDataElement).value);
  };
  const handleKindOfFood = (e: SelectChangeEvent<string>) => {
    setKindOfFood((e.target as HTMLDataElement).value);
  };
  const resetForm = () => {
    cleanForm();  
  };
  const submitRecipe= () => {
    addRecipe( {} as IRecipe);  
  };
  
  return (
    <div className={styles.form}>
      <h1 className={styles.form__title}>Новый рецепт</h1>
      <form className={styles.form__col} onSubmit={(e)=>e.preventDefault()}>
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
                value={inputFields['titleRecipe']}
                required={true}
                onChange={handleTitleRecipe}
                fullWidth={true}
                inputProps={{ "aria-label": "description" }}
              />
            </div>
            <div className={styles.form__right_description}>
              <TextareaAutosize
                minRows={1}
                required={true}
                value={inputFields.description}
                onChange={handleDescription}
                placeholder="Введите информацию о рецепте..."
                style={{ width: "100%", height: 130, border: '1px solid grey', resize: 'none', boxSizing: "border-box"}}
              />
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Могут ли другие просматривать данный рецепт?</FormLabel>
                <RadioGroup 
                  row aria-label="checked" 
                  value={inputFields.isPrivat}
                  onChange={handleIsPrivat} 
                  defaultValue={''} 
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value='' control={<Radio />} label="Да" />
                  <FormControlLabel value='1' control={<Radio />} label="Нет" />
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
                value={inputFields.cost} 
                onChange={handleCost}
              />
            </div>
            <div className={styles.form__details_row}>
              <TextField 
                label="Время приготовления(мин)" 
                variant="standard" 
                fullWidth 
                type='number'
                value={inputFields.cookingTime} 
                onChange={handleCookingTime}
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
                value={inputFields.persons} 
                onChange={handlePersons}
              />
            </div>
            <div className={styles.form__details_row}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-label-typeCuisine">Тип кухни</InputLabel>
                <Select
                  labelId="select-label-typeCuisine"
                  label="Тип кухни"
                  value={inputFields.typeCuisine}
                  onChange={handleTypeCuisine}
                  defaultValue=""
                >
                  {dataSelectForm.cuisine.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
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
                  value={inputFields.typeOfMeal}
                  onChange={handleTypeOfMeal}
                  defaultValue=""
                >
                  {dataSelectForm.typeOfMeal.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
            <div className={styles.form__details_row}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-label-kindOfFood">Вид пищи</InputLabel>
                <Select
                  labelId="select-label-kindOfFood"
                  label="Вид пищи"
                  value={inputFields.kindOfFood}
                  onChange={handleKindOfFood}
                  defaultValue=""
                >
                  {dataSelectForm.kindOfFood.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)} 
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={`${styles.form__row} ${styles.form__send}`}>
          <Button onClick={submitRecipe} variant="contained" color="primary" style={{ width: 100}} type="submit">
            Создать 
          </Button>
          <Button onClick={resetForm} variant="contained" color="primary" style={{ width: 100}} >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};
