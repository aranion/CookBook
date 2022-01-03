import {SyntheticEvent, ChangeEvent} from 'react';
import styles from "./searchForm.module.scss";
import Chips from '../Chips';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'router/routeList';
import { 
  Paper, 
  Box, 
  InputBase, 
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
import {typeOfMeal as typeOfMealList, kindOfFood as kindOfFoodList, cuisine as cuisineList} from "mocks/list-select"

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

  const form = useAppSelector((state: RootState) => 
    (state.searchRecipe as SearchState)
  );

  const { author, rating } = useAppSelector((state: RootState) => 
    (state.searchRecipe as SearchState)
  );

  const time = useAppSelector((state: RootState) => 
    (state.searchRecipe as SearchState).time.toString()
  );

  const {
    setSearchForm,
  } = useActions()

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>, value?: string) => {

      const newValue = event.target.value
      const name = event.target.name
      setSearchForm({
        ...form, [name]: newValue
      })
  }

  const handleChangeTime = (event: SelectChangeEvent) => {
    const value = event.target.value
    setSearchForm({
      ...form, time: +value
    })
  };

  const handelChangeRating = (event: SyntheticEvent<Element, Event>, value: number | null) => {
    if (value) {
      setSearchForm({
        ...form, rating: value
      })
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
            name="time"
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
              name="kindOfFood"
              onChange={handleChangeInput}
            >
              {Object.entries(kindOfFoodList).map(kindOfFood => {
                return <FormControlLabel 
                    value={kindOfFood[0]} 
                    control={<Radio />} 
                    label={kindOfFood[0] === "NULL" ? "Любые" : kindOfFood[1]} 
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
              value={form.title}
              name="title"
              onChange={handleChangeInput}
            />
          </Paper>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Имя автора:</Typography>
          <Paper elevation={0}>
            <InputBase 
              className={styles.drawer__input}
              value={author}
              name="author"
              onChange={handleChangeInput}
            />
          </Paper>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Тип трапезы:</Typography>
          <FormControl>
            <RadioGroup
              sx={checkboxStyle}
              aria-label="gender"
              defaultValue="NULL"
              name="typeOfMeal"
              onChange={handleChangeInput}
            >
              {Object.entries(typeOfMealList).map(typeOfMeal => {
                return <FormControlLabel 
                    value={typeOfMeal[0]} 
                    control={<Radio />} 
                    label={typeOfMeal[0] === "NULL" ? "Любая" : typeOfMeal[1]} 
                    color="primary" 
                    key={typeOfMeal[0]}
                  />
              })}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Кухня:</Typography>
          <FormControl>
            <RadioGroup
              sx={checkboxStyle}
              aria-label="gender"
              defaultValue="NULL"
              name="cuisine"
              onChange={handleChangeInput}
            >
              {Object.entries(cuisineList).map(cuisine => {
                return <FormControlLabel 
                    value={cuisine[0]} 
                    control={<Radio />} 
                    label={cuisine[0] === "NULL" ? "Любая" : cuisine[1]} 
                    color="primary" 
                    key={cuisine[0]}
                  />
              })}
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