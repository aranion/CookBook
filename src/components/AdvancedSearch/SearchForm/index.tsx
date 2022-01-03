import {SyntheticEvent, ChangeEvent} from 'react';
import styles from "./searchForm.module.scss";
import Chips from '../Chips';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'router/routeList';
import { 
  Paper, 
  Box, 
  InputBase, 
  Checkbox, 
  FormGroup, 
  FormControlLabel, 
  FormControl, 
  RadioGroup, 
  Radio,
  Select,
  MenuItem,
  SelectChangeEvent,
  Rating,
  Typography,
  Button,
} from '@mui/material';
import { useActions } from "hooks/useActions";
import { RootState, useAppSelector } from 'store';
import { SearchState } from "store/search/types";
import {typeOfMeal as typeOfMealList, kindOfFood as kindOfFoodList} from "mocks/list-select"

interface PropsType {
  drawerWidth: number, 
  handleClose?: () => void
}

export const SearchForm = ({drawerWidth, handleClose}: PropsType ) => {

  const router = useNavigate();

  const displayGrid = 
    drawerWidth > 300 
      ? {
          display: 'inline-grid', 
          gridTemplateColumns: '1fr 3fr', 
          alignItems: 'center', 
          textAlign: 'right',
          gridGap: '16px'
        } as const
      : {}
  
  const checkboxStyle = 
    drawerWidth > 300 
    ? {flexDirection: 'row'} as const
    : {pl: 2}

  const { title, author, rating } = useAppSelector((state: RootState) => 
    (state.searchRecipe as SearchState)
  );

  const time = useAppSelector((state: RootState) => 
    (state.searchRecipe as SearchState).time.toString()
  );

  const {
    setSearchTime, 
    setSearchRating, 
    setSearchTitle,
    setSearchAuthor,
    setSearchTypeOfMeal,
    setSearchCuisine,
    setSearchKindOfFood,
  } = useActions()

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);
  };

  const handleChangeAuthor = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setSearchAuthor(event.target.value);
  };

  const handleChangeTime = (event: SelectChangeEvent) => {
    setSearchTime(+event.target.value);
  };

  const handelChangeRating = (event: SyntheticEvent<Element, Event>, value: number | null) => {
    if (value) {
      setSearchRating(value)
    }
  }

  const handleSearch = () => {
    router(RouteNames.SEARCH_ADVANCED);
    if(!!handleClose) {
      handleClose();
    }
  }

  return (
    <Box
      component="div"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
      aria-label="mailbox folders"
    >
      <Paper 
        elevation={0} 
        square 
        className={styles.drawer}
      >
        <h3 className={styles.drawer__header}>Расширенный поиск:</h3>
        <Chips drawerWidth={drawerWidth} chipsLabel='Основные ингридиенты:'/>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Время приготовления:</Typography>
          <Select
            value={time}
            onChange={handleChangeTime}
            className={styles.drawer__select}
          >
            <MenuItem value={0}>любое</MenuItem>
            <MenuItem value={30}>не более 30 минут</MenuItem>
            <MenuItem value={60}>не более часа</MenuItem>
            <MenuItem value={120}>не более 2 часов</MenuItem>
          </Select>
        </Box>
        <Box sx={drawerWidth > 300 
                  ? displayGrid 
                  : {display: 'flex', gridGap: 16}}
          >
          <Typography variant="body1" color="text.secondary">
            Рейтинг:
          </Typography>
          <Rating 
            name="size-small" 
            value={rating}
            onChange={handelChangeRating}
          />
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Тип блюда:</Typography>
          <FormControl>
            <RadioGroup
              sx={checkboxStyle}
              aria-label="gender"
              defaultValue="NULL"
            >
              {Object.entries(kindOfFoodList).map(kindOfFood => {
                return <FormControlLabel 
                    value={kindOfFood[0]} 
                    control={<Radio />} 
                    label={kindOfFood[0] === "NULL" ? "Любое" : kindOfFood[1]} 
                    color="primary" 
                    key={kindOfFood[0]}
                  />
              })}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Название рецепта:</Typography>
          <Paper elevation={0}>
            <InputBase 
              className={styles.drawer__input}
              value={title}
              onChange={handleChangeTitle}
            />
          </Paper>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Имя автора:</Typography>
          <Paper elevation={0}>
            <InputBase 
              className={styles.drawer__input}
              value={author}
              onChange={handleChangeAuthor}
            />
          </Paper>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Продукты:</Typography>
          <FormControl>
            <RadioGroup
              sx={checkboxStyle}
              aria-label="gender"
              defaultValue="other"
            >
              <FormControlLabel value="other" control={<Radio />} label="Любые" color="primary"/>
              <FormControlLabel value="vegetarian" control={<Radio />} label="Веганские" color="primary"/>
              <FormControlLabel value="lean" control={<Radio />} label="Постные" color="primary"/>
              <FormControlLabel value="sugarFree" control={<Radio />} label="Без сахара" color="primary"/>
              <FormControlLabel value="kosher" control={<Radio />} label="Кошерные" color="primary"/>
            </RadioGroup>
          </FormControl>
        </Box>
        <Button 
          variant="contained" 
          disableElevation
          onClick={handleSearch}
        >
          Найти
        </Button>
      </Paper>
    </Box>
  );
}