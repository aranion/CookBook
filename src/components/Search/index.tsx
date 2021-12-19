import styles from "./search.module.scss";
import { ChangeEvent, useState, FormEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputBase, IconButton, Paper, Box } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import {RouteNames} from '../../router/routeList'

export const Search = () => {

  const [search, setSearch] = useState<string>("");

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
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
            value={search}
            onChange={handleChangeSearchValue}
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
