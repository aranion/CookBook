import { ChangeEvent, useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {Button, InputBase, IconButton, Paper} from "@mui/material";
import {useAppSelector} from "../../store";
import { IRecipe } from "models/Recipe";
import {useActions} from 'hooks/useActions'
import {useTimeout} from 'hooks/useTimeout'
import styles from "./search.module.scss";

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
    const {setRecipesFilter} = useActions()
    const {filter} = useAppSelector(state => state.recipes)

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
      setRecipesFilter(searchValue)
  }

  return (
    <div className={styles["search-block"]}>
      <div className={styles["search-block__container"]}>
        <Paper
          component="form"
          sx={{
            p: "2px 3px",
            display: "flex",
            alignItems: "center",
            width: 400,
            height: 35,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Название рецепта"
            value={search}
            onChange={handleChangeSearch}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <Button variant="contained" color="primary">
        Расширенный поиск
      </Button>
    </div>
  );
};
