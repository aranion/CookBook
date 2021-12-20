import { ChangeEvent, useState, useCallback, FormEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {Button, InputBase, IconButton, Paper, Box} from "@mui/material";
import {useAppSelector} from "../../store";
import { IRecipe } from "models/Recipe";
import {useActions} from 'hooks/useActions'
import {useTimeout} from 'hooks/useTimeout'
import {useNavigate} from 'react-router-dom'
import {RouteNames} from '../../router/routeList'
import styles from "./search.module.scss";

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
    const {setRecipesFilter} = useActions()
    const {filter} = useAppSelector(state => state.recipes)

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
  };

  const handleSearch = () => {
      setRecipesFilter(searchValue)
  }
  const router = useNavigate()
  return (
    <Box className={styles["search-block"]}>
      <Box className={styles["search-block__container"]}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 400,
            height: 40,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Название рецепта"
            value={searchValue}
            onChange={handleChangeSearch}
          />
          <IconButton 
            type="submit" 
            sx={{ p: 1 }} 
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Button 
        sx={{ height: 40 }}
        variant="contained" 
        color="primary"
        onClick={() => router(RouteNames.ADVANCED_SEARCH)}
      >
        Расширенный поиск
      </Button>
    </Box>
  );
};
