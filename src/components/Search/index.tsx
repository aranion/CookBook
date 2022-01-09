import { ChangeEvent, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputBase, IconButton, Paper, Box } from "@mui/material";
import { useActions } from 'hooks/useActions'
import styles from "./search.module.scss";
import { SearchModal } from 'components'
import { useLocation, useNavigate } from 'react-router-dom';
import { RouteNames } from 'router/routeList';
import { clearSearchForm } from 'mocks/search'

export const Search = () => {

  const location = useLocation();
  const router = useNavigate();

  const [ open, setOpen ] = useState(false);
  const [ searchValue, setSearchValue ] = useState<string>("");

  const { setSearchForm, fetchSearchRecipes } = useActions();

  const handleOpen = () => {
    if(location.pathname === RouteNames.SEARCH_ADVANCED) return
    setSearchForm(clearSearchForm)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setSearchForm({...clearSearchForm, title: searchValue})
    fetchSearchRecipes()
    if(location.pathname !== RouteNames.SEARCH_ADVANCED) {
      router(RouteNames.SEARCH_ADVANCED);
    }
  }

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
        onClick={handleOpen}
      >
        Расширенный поиск
      </Button>
      <SearchModal handleClose={handleClose} open={open}/>
    </Box>
  );
};
