import styles from "./search.module.scss";
import { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import {useNavigate} from 'react-router-dom'
import {RouteNames} from '../../router/routeList'

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("search!");
  };

  const router = useNavigate()
  
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
            onChange={handleSearch}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => router(RouteNames.ADVANCED_SEARCH)}
      >

        Расширенный поиск
      </Button>
    </div>
  );
};
