import {SyntheticEvent, ChangeEvent, ReactNode} from 'react';
import styles from "./searchForm.module.scss";
import Chips from '../Chips';
import { useNavigate, useLocation } from 'react-router-dom';
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
import {TSelect} from "components/Simples"

interface PropsType {
  drawerWidth: number, 
  handleClose?: () => void
}

export const SearchForm = ({drawerWidth, handleClose}: PropsType ) => {

  const router = useNavigate();
  const location = useLocation();

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
    fetchSearchRecipes,
  } = useActions()

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>, value?: string) => {

      let newValue = event.target.value
      const name = event.target.name

      if(newValue === 'Другое') newValue = ''

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
    } else {
      setSearchForm({...form, rating: 0})
    }
  }

  const handleSearch = () => {
    if(location.pathname !== RouteNames.SEARCH_ADVANCED) {
      router(RouteNames.SEARCH_ADVANCED);
    }
    if(!!handleClose) {
      handleClose();
    }
    fetchSearchRecipes()
  }

  const renderFormControlLabel = (list: TSelect): Iterable<ReactNode> => 
    Object.entries(list).map(item => {
      if (item[1] === '') return '';
      return <FormControlLabel 
          value={item[1]} 
          control={<Radio />} 
          label={item[1]} 
          color="primary" 
          key={item[0]}
        />
    })

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
              defaultValue="Другое"
              name="kindOfFood"
              onChange={handleChangeInput}
            >
              {renderFormControlLabel(kindOfFoodList)}
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
              value={author?.name}
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
              defaultValue="Другое"
              name="typeOfMeal"
              onChange={handleChangeInput}
            >
              {renderFormControlLabel(typeOfMealList)}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Кухня:</Typography>
          <FormControl>
            <RadioGroup
              sx={checkboxStyle}
              defaultValue="Другое"
              name="cuisine"
              onChange={handleChangeInput}
            >
              {renderFormControlLabel(cuisineList)}
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