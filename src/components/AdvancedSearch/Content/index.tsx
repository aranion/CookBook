import {useState} from 'react';
import styles from "./advancedSearch.module.scss";
import Chips from '../Chips'

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

import RecipeCard from 'components/RecipeCard';
import { IRecipe } from "models/Recipe";

const ContentAdvancedSearch = ({ recipes }: { recipes: IRecipe[] }) => {

  const drawerWidth = 300;

  const [time, setTime] = useState('');

  const handleChangeTime = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', height: "100%" }}>
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
          <Chips chipsLabel='Основные ингридиенты:'/>
          <Box>
            <Typography variant="body1" color="text.secondary">Время приготовления:</Typography>
            <Select
              value={time}
              onChange={handleChangeTime}
              className={styles.drawer__select}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={30}>не более 30 минут</MenuItem>
              <MenuItem value={60}>не более часа</MenuItem>
              <MenuItem value={120}>не более 2 часов</MenuItem>
            </Select>
          </Box>
          <Box sx={{display: 'flex', gridGap: 16, alignItems: 'center'}}>
            <Typography variant="body1" color="text.secondary">
              Рейтинг:
            </Typography>
            <Rating name="size-small" defaultValue={4} />
          </Box>
          <Box>
            <Typography variant="body1" color="text.secondary">Тип блюда:</Typography>
            <FormGroup className={styles.drawer__checkbox}>
              <FormControlLabel control={<Checkbox />} label="Закуски" color="primary"/>
              <FormControlLabel control={<Checkbox />} label="Основные блюда" color="primary"/>
              <FormControlLabel control={<Checkbox />} label="Десерты" color="primary"/>
              <FormControlLabel control={<Checkbox />} label="Напитки" color="primary"/>
            </FormGroup>
          </Box>
          <Box>
            <Typography variant="body1" color="text.secondary">Название рецепта:</Typography>
            <Paper elevation={0}>
              <InputBase className={styles.drawer__input}/>
            </Paper>
          </Box>
          <Box>
            <Typography variant="body1" color="text.secondary">Имя автора:</Typography>
            <Paper elevation={0}>
              <InputBase className={styles.drawer__input}/>
            </Paper>
          </Box>
          <Box>
            <Typography variant="body1" color="text.secondary">Продукты:</Typography>
            <FormControl 
              className={styles.drawer__radio}
            >
              <RadioGroup
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
          <Button variant="contained" disableElevation>
            Найти
          </Button>
        </Paper>
      </Box>
      <Box
        component="main"
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div className={styles.main}>
          {recipes.map(recipe => {
            return <RecipeCard recipe={recipe} key={recipe.id}/>
          })}
        </div>

      </Box>
    </Box>
  );
}

export default ContentAdvancedSearch;