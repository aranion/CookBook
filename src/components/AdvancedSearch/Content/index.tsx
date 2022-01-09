import { Box } from '@mui/material';
import { RecipeCard, SearchForm } from 'components';
import { IRecipe } from "models/Recipe";
import { Loader } from "components";
import { RootState, useAppSelector } from "store";

interface PropsType {
  recipes: IRecipe[]
}

const ContentAdvancedSearch = ({ recipes }: PropsType) => {
  const drawerWidth = 300;

  const loading = useAppSelector((state: RootState) => 
    (state.recipes.loading)
  );

  const loader = () => {
    return <Loader />
  }

  const searchResult = () => {
    if (recipes.length === 0) {
      return (<Box sx={{ width: '100%', background: '#FFF', fontSize:'20px', minHeight: '20px', textAlign:'center', borderRadius: '16px'}}>
        Рецепты не найдены...
      </Box>)
    }

    return recipes.map(recipe => {
      return <RecipeCard recipe={recipe} key={recipe._id}/>
    })
  }

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
          {loading 
            ? loader()
            : searchResult()
          }
        </Box>
      </Box>
    </Box>
  );
}

export default ContentAdvancedSearch;