import {useState, ChangeEvent, FormEvent} from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextareaAutosize,
    TextField
} from "@mui/material";
import {SelectChangeEvent} from '@mui/material/Select';
import styles from "./addRecipeForm.module.scss";
import {StepsList} from "./StepsList";
import {IngredientList} from "./IngredientList";
import {useActions} from "../../hooks/useActions";
import {IRecipe} from "../../models/Recipe";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {CustomSelect} from '../Simples'
// TODO заглушка
// после в БД надо создать списки, которые будем загружать и выводить
import {typeOfMeal, cuisine, kindOfFood} from '../../mocks/list-select'

export const AddRecipeForm = () => {
    const [nameRecipe, setNameRecipe] = useState("");
    const [urlImg, setUrlImg] = useState("")
    const [imgFiles, setImgFiles] = useState<File[]>([])

    const handleNameRecipe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameRecipe((e.target as HTMLDataElement).value);
    };

    const {addRecipe} = useActions()
    const handleAddRecipe = async (e: FormEvent) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement )
        const result = await addRecipe(form)
        console.log(result)
    }

    const handleImgUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUrlImg(e.target.value)
    }
    // @ts-ignore
    const handleBtn = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.target.nextSibling.click()
    }

    return (
        <div className={styles.form}>
            <h1 className={styles.form__title}>Новый рецепт</h1>
            <form id="form-add-recipe" className={styles.form__col} onSubmit={handleAddRecipe}>
                <div className={styles.form__row}>
                    <div className={styles.form__left}>
                        <div className={styles["form__left_container"]}>
                            <div className={styles["form__left_photoRecipe"]}>
                                <AddPhotoAlternateIcon/>
                            </div>
                            <Button
                                sx={{
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: 0
                                }}
                                variant="contained"
                                color="primary"
                                onClick={handleBtn}
                            >
                                Загрузить фото
                            </Button>
                            <input type="file" hidden name="urlImg" value={urlImg} onChange={handleImgUrlChange}/>
                        </div>
                    </div>
                    <div className={styles.form__right}>
                        <div className={styles.form__right_title}>
                            <Input
                                placeholder={"Название рецепта"}
                                name="title"
                                value={nameRecipe}
                                required={true}
                                onChange={handleNameRecipe}
                                fullWidth={true}
                                inputProps={{"aria-label": "description"}}
                            />
                        </div>
                        <div className={styles.form__right_description}>
                            <TextareaAutosize
                                minRows={1}
                                required={true}
                                name="description"
                                placeholder="Введите информацию о рецепте..."
                                style={{
                                    width: "100%",
                                    height: 130,
                                    border: '1px solid grey',
                                    resize: 'none',
                                    boxSizing: "border-box"
                                }}
                            />
                        </div>
                        <div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Могут ли другие
                                    просматривать данный рецепт?</FormLabel>
                                <RadioGroup row aria-label="checked"
                                            defaultValue={true}
                                            name="private">
                                    <FormControlLabel value={true}
                                                      control={<Radio/>}
                                                      label="Да"/>
                                    <FormControlLabel value={false}
                                                      control={<Radio/>}
                                                      label="Нет"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className={styles.form__row}>
                    <div
                        className={`${styles.form__left} ${styles.cooking__left}`}>
                        <IngredientList/>
                    </div>
                    <div
                        className={`${styles.form__right} ${styles.cooking__right}`}>
                        <h4 className={styles.cooking__heading}>Процесс
                            приготовления:</h4>
                        <div className={styles.cooking__steps}>
                            <StepsList/>
                        </div>
                    </div>
                </div>
                <div className={styles.form__row}>
                    <div className={styles.form__details_col}>
                        <div className={styles.form__details_row}>
                            <TextField
                                label="Стоимость"
                                name="cost"
                                variant="standard"
                                fullWidth
                                type='number'
                            />
                        </div>
                        <div className={styles.form__details_row}>
                            <TextField
                                label="Время приготовления(мин)"
                                name="time"
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
                                name="portionsAmount"
                                variant="standard"
                                fullWidth
                                type='number'
                            />
                        </div>
                        <div className={styles.form__details_row}>
                            <CustomSelect list={cuisine} label="Кухня" name="cuisine"/>
                        </div>
                    </div>
                    <div className={styles.form__details_col}>
                        <div className={styles.form__details_row}>
                            <CustomSelect list={typeOfMeal} label="Тип трапезы" name="typeOfMeal"/>
                        </div>
                        <div className={styles.form__details_row}>
                            <CustomSelect list={kindOfFood} label="Вид пищи" name="kindOfFood"/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.form__row} ${styles.form__send}`}>
                    <Button variant="contained" color="primary"
                            type="submit"
                            style={{width: 100}}
                            // onClick={handleAddRecipe}
                    >
                        Создать
                    </Button>
                    <Button variant="contained" color="primary"
                            style={{width: 100}}>
                        Отмена
                    </Button>
                </div>
            </form>
        </div>
    );
};
