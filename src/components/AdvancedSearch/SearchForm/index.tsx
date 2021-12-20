import {useState} from 'react';
import styles from "./searchForm.module.scss";
import Chips from '../Chips'
import {useNavigate} from 'react-router-dom'
import {RouteNames} from 'router/routeList'

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

export const SearchForm = ({drawerWidth, handleClose}: {drawerWidth: number, handleClose?: () => void}) => {

  const router = useNavigate()

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

  const [time, setTime] = useState('');

  const handleChangeTime = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  const handleSearch = () => {
    router(RouteNames.ADVANCED_SEARCH);
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
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
          <Rating name="size-small" defaultValue={4} />
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Тип блюда:</Typography>
          <FormGroup sx={checkboxStyle}>
            <FormControlLabel control={<Checkbox />} label="Закуски" color="primary"/>
            <FormControlLabel control={<Checkbox />} label="Основные блюда" color="primary"/>
            <FormControlLabel control={<Checkbox />} label="Десерты" color="primary"/>
            <FormControlLabel control={<Checkbox />} label="Напитки" color="primary"/>
          </FormGroup>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Название рецепта:</Typography>
          <Paper elevation={0}>
            <InputBase className={styles.drawer__input}/>
          </Paper>
        </Box>
        <Box sx={displayGrid}>
          <Typography variant="body1" color="text.secondary">Имя автора:</Typography>
          <Paper elevation={0}>
            <InputBase className={styles.drawer__input}/>
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