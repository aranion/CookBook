import styles from "./advancedSearch.module.scss";
import {SearchForm} from 'components/AdvancedSearch/SearchForm'

import { Box } from '@mui/material';

import {RecipeReviewCard as RecipeCard} from 'components';
import { IRecipe } from "models/Recipe";

const ContentAdvancedSearch = ({ recipes }: { recipes: IRecipe[] }) => {

  const drawerWidth = 300;

  return (
    <Box sx={{ display: 'flex', height: "100%" }}>
      <SearchForm drawerWidth={drawerWidth}/>
      <Box
        component="main"
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Box 
          sx={{
            p: '16px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-around',
            gridGap: '16px',
            alignItems: 'flex-start'
          }}
        >
          {recipes.map(recipe => {
            return <RecipeCard recipe={recipe} key={recipe.id}/>
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default ContentAdvancedSearch;