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
import {useState} from "react";
import {useActions} from "../../hooks/useActions";
import {IRecipe} from "../../models/Recipe";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

// TODO заглушка
// после в БД надо создать списки, которые будем загружать и выводить
type TSelect = { [index: string]: string }
const typeOfMeal: TSelect = {
    NULL: '',
    BREAKFAST: 'Завтрак',
    LUNCH: 'Обед',
    DINNER: 'Ужин',
    SNACK: 'Перекус',
}
const cuisine: TSelect = {
    NULL: '',
    SAFOOD: 'Морепродукты',
    MEAT: 'Мясо',
    VEGETARIAN: 'Вегетарианская',
}


export const AddRecipeForm = () => {
    const [nameRecipe, setNameRecipe] = useState("");
    const [selectedTypeOfMeal, setSelectedTypeOfMeal] = useState(typeOfMeal.NULL)
    const [selectedCuisine, setSelectedCuisine] = useState(cuisine.NULL)
    const [imgFiles, setImgFiles] = useState<File[]>([])

    const handleNameRecipe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameRecipe((e.target as HTMLDataElement).value);
    };

    const {addRecipe} = useActions()
    const handleAddRecipe = async () => {
        const form = new FormData()
        const recipe = {
            title: "", // поправить - создать useState с соотв. поля
            description: "", // поправить - создать useState с соотв. поля
            ingredients: [], // поправить - создать useState с соотв. поля
            steps: [], // поправить - создать useState с соотв. поля
            author: {id: '',name: ""}, // поправить - создать useState с соотв. поля
            time: 0, // поправить - создать useState с соотв. поля
            urlImg: "", // поправить - создать useState с соотв. поля
            portionsAmount: 0, // поправить - создать useState с соотв. поля
            cost: 0, // поправить - создать useState с соотв. поля
            rating: 0,
            typeOfMeal: selectedTypeOfMeal,
            cuisine: selectedCuisine
        }
        if(imgFiles.length) imgFiles.forEach((file, idx) => {
            form.append(`image_${idx}`, file, file.name)
        })
        const result = await addRecipe(recipe, form)
        console.log(result)
    }

    const handleChangeSelect = (e: SelectChangeEvent) => {
        if (e.target.name === "cuisine") setSelectedCuisine(e.target.value)
        if (e.target.name === "typeOfMeal") setSelectedTypeOfMeal(e.target.value)
    }
    return (
        <div className={styles.form}>
            <h1 className={styles.form__title}>Новый рецепт</h1>
            <form className={styles.form__col}>
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
                                inputProps={{"aria-label": "description"}}
                            />
                        </div>
                        <div className={styles.form__right_description}>
                            <TextareaAutosize
                                minRows={1}
                                required={true}
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
                                            defaultValue="yes"
                                            name="row-radio-buttons-group">
                                    <FormControlLabel value="yes"
                                                      control={<Radio/>}
                                                      label="Да"/>
                                    <FormControlLabel value="no"
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
                                <InputLabel id="select-label-cuisine">Тип
                                    кухни</InputLabel>
                                <Select
                                    labelId="select-label-cuisine"
                                    label="Кухня"
                                    name="cuisine"
                                    value={selectedCuisine}
                                    onChange={handleChangeSelect}
                                >
                                    {Object.keys(cuisine).map((key: keyof TSelect) => {
                                        <MenuItem key={key}
                                                  value={key}>{cuisine[key]}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={styles.form__details_col}>
                        <div className={styles.form__details_row}>
                            <FormControl fullWidth variant="standard">
                                <InputLabel
                                    id="select-label-typeOfMeal">Трапеза</InputLabel>
                                <Select
                                    labelId="select-label-typeOfMeal"
                                    label="Трапеза"
                                    name="typeOfMeal"
                                    value={selectedTypeOfMeal}
                                    onChange={handleChangeSelect}
                                >
                                    {Object.keys(typeOfMeal).map((key: keyof TSelect) => {
                                        <MenuItem key={key}
                                                  value={key}>{typeOfMeal[key]}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                        <div className={styles.form__details_row}>
                            <FormControl fullWidth variant="standard">
                                <InputLabel id="select-label-kindOfFood">Вид
                                    пищи</InputLabel>
                                <Select
                                    labelId="select-label-kindOfFood"
                                    label="Вид пищи"
                                    value={10}
                                >
                                    {/*// TODO - надо переделать как выше пример*/}
                                    {/*// а фообще можно вынести как отдельный компонент:*/}
                                    {/*// <CustomSelect name="kindOfFood" label="Вид пищи" values={kindOfFood} />*/}
                                    {/*Вроде такого
                  const CustomSelect = ({name, label, values, initialVal}) => {
                     const [value, setValue] = useState(initialVal)
                  
                     return <Select ....
                  }
                  */}
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
                    <Button variant="contained" color="primary"
                            style={{width: 100}}
                            onClick={handleAddRecipe}
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
