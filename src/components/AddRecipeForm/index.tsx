import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useAppSelector } from "store";
import { AddRecipeState} from "store/addRecipe/types";
import { useActions } from "hooks/useActions";
import { ChangeEvent, FormEvent} from "react";
import { StepsList } from "./StepsList";
import { IngredientList } from "./IngredientList";
import { CustomSelect} from '../Simples';
import styles from "./addRecipeForm.module.scss";
// TODO создать списки typeOfMeal, cuisine, kindOfFood в БД
import { typeOfMeal, cuisine, kindOfFood } from '../../mocks/list-select';
import { RecipeState } from "store/recipe/types";
import { ProfileState } from "store/profile/types";

export const AddRecipeForm = () => {

  const {
    addRecipe, 
    setInpuTitleRecipe,
    setDescriptionRecipe,
    setIsPrivatRecipe,
    setCostRecipe,
    setCookingTime,
    setPersons,
    cleanForm,
    setKindOfFood, 
    setTypeCuisine,
    setTypeOfMeal,
    setIsAddRecipe,
    setUrlImg,
  } = useActions(); 

  const { inputFields } = useAppSelector(state => (state.addRecipe as AddRecipeState));
  const { isAddRecipe } = useAppSelector(state => (state.recipes as RecipeState));
  const { user } = useAppSelector(state => (state.profile as ProfileState));

  const handleTitleRecipe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpuTitleRecipe((e.target as HTMLDataElement).value);
  };
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionRecipe((e.target as HTMLDataElement).value);
  };
  const handleIsPrivat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivatRecipe((e.target as HTMLDataElement).value === "true" ? true : false);
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
  const handleTypeCuisine = (value:string) => {
    setTypeCuisine(value);
  };
  const handleTypeOfMeal = (value:string) => {
    setTypeOfMeal(value);
  };
  const handleKindOfFood = (value:string) => {
    setKindOfFood(value);
  };

  const resetForm = () => {
    cleanForm();  
  };

  const handleAddRecipe = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement );
    await form.set('author', user!.id); // Добавялет id автора рецепта
    const result = await addRecipe(form);
    console.log(result);
  }
  const handleIsAddRecipe = () => {
    setIsAddRecipe();
    resetForm();
  }
  const handleImgUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const img:  any = e.target.parentNode?.querySelector('img');
    img.src = URL.createObjectURL((e.target as any).files[0]);
    img.style.display = "block";
    setUrlImg(e.target.value);
  }
  // @ts-ignore
  const handleBtn = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.target.nextSibling.click();
  }

  if (isAddRecipe) {
    return <div className={styles.form}>
      <p>
        Рецепт успешно добавлен!
      </p>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleIsAddRecipe}
      >
        Ок
      </Button>
    </div>
  }

  return (
    <div className={styles.form}>
      <h1 className={styles.form__title}>Новый рецепт</h1>
      <form id="form-add-recipe" className={styles.form__col} onSubmit={handleAddRecipe}>
        <div className={styles.form__row}>
          <div className={styles.form__left}>
            <div className={styles["form__left_container"]}>
              <div className={styles["form__left_photoRecipe"]}>
                {inputFields.urlImg 
                  ? ''
                  : <AddPhotoAlternateIcon />
                }
                <img className={styles["form__left_img"]} src="" id="image" alt=' '/>
              </div>
              <Button 
                sx={{width: '100%', position: 'absolute', bottom: 0 }} 
                variant="contained" 
                color="primary"
                onClick={handleBtn}
              >
                Загрузить фото
              </Button>
              <input type="file" hidden id="file" name="urlImg" value={inputFields.urlImg} onChange={handleImgUrlChange}/>
            </div>
          </div>
          <div className={styles.form__right}>
            <div className={styles.form__right_title}>
              <TextField
                placeholder={"Введите название рецепта"}
                name="title"
                label='Название рецепта'
                variant="standard"
                value={inputFields.titleRecipe}
                required={true}
                onChange={handleTitleRecipe}
                fullWidth={true}
                inputProps={{ "aria-label": "description" }}
              />
            </div>
            <div className={styles.form__right_description}>
              <TextField
                required={true}
                name="description"
                label='Описание'
                multiline
                fullWidth
                rows={5}
                variant="outlined"
                value={inputFields.description}
                onChange={handleDescription}
                placeholder="Введите информацию о рецепте..."
              />
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Сделать рецепт приватным?</FormLabel>
                <RadioGroup 
                  row aria-label="checked" 
                  value={inputFields.isPrivat}
                  onChange={handleIsPrivat} 
                  defaultValue={false} 
                  name="private"
                >
                  <FormControlLabel value={true} control={<Radio />} label="Да" />
                  <FormControlLabel value={false} control={<Radio />} label="Нет" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={`${styles.form__left} ${styles.cooking__left}`}>
            <IngredientList 
              ingredients={inputFields.ingredients}
            />
          </div>
          <div className={`${styles.form__right} ${styles.cooking__right}`}>
            <h4>Процесс приготовления:</h4>
            <div className={styles.form__right_steps}>
              <StepsList 
                steps={inputFields.steps}
              /> 
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
                name="cost"
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
                name="time"
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
                name="portionsAmount"
                fullWidth 
                type='number'
                value={inputFields.persons} 
                onChange={handlePersons}
              />
            </div>
            <div className={styles.form__details_row}>
              <CustomSelect 
                list={cuisine} 
                label="Кухня" 
                name="cuisine" 
                selectedValue={inputFields.typeCuisine}
                setSelectedValue={handleTypeCuisine}
              />
            </div>
          </div>
          <div className={styles.form__details_col}>
            <div className={styles.form__details_row}>
              <CustomSelect 
                list={typeOfMeal} 
                label="Тип трапезы" 
                name="typeOfMeal"
                selectedValue={inputFields.typeOfMeal}
                setSelectedValue={handleTypeOfMeal}
              />
            </div>
            <div className={styles.form__details_row}>
              <CustomSelect 
                list={kindOfFood} 
                label="Вид пищи" 
                name="kindOfFood"
                selectedValue={inputFields.kindOfFood}
                setSelectedValue={handleKindOfFood}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.form__row} ${styles.form__send}`}>
          <Button 
            variant="contained" 
            color="primary" 
            style={{ width: 100}} 
            type="submit"
          >
            Создать 
          </Button>
          <Button 
            onClick={resetForm} 
            variant="contained" 
            color="primary" 
            style={{ width: 100}}
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};
