import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IRecipe } from "models/Recipe";
import { useActions } from "hooks/useActions";
import { ContextMenuDescription, RatingRecipe } from "components/Simples";
import style from "./recipeCard.module.scss";
import { useEffect } from "react";
import { RootState, useAppSelector } from "store";
import { CookbooksState } from "store/cookbooks/types";

export const RecipeCard = ({ recipe }: { recipe: IRecipe }) => {
  
  const [isFavorite, setIsFavorite] = useState(false);

  const { setIsModal, addRecipeInBook, fetchCookbooks, deleteRecipeInBook } = useActions();

  const onOpenModal = (idRecipe: string) => setIsModal(idRecipe);

  const { books } = useAppSelector((state) => (state as RootState).cookbooks as CookbooksState);

  const getMinDescription = (value: number): string => {
    let str: string = recipe.description.substring(0, value);
    str += "...";
    return str;
  };

  useEffect(() => {
    // получение с сервера кулинарных книги
    fetchCookbooks();
  }, []);

  const handleFavorite = (idBook: string, idRecipe: string) => {
    // Добавляет в избранное

    if( books[0].recipesId.find(el => el === idRecipe)) {
      deleteRecipeInBook(idBook,  idRecipe); // если рецепт уже создан в книге, удалить
    } else {
      addRecipeInBook(idBook, idRecipe); // если рецепт в книге нет, создать
    } 

    toggleIsFavorite(idRecipe);
  }

  const toggleIsFavorite = (idRecipe: string) => {
    if( books[0].recipesId.find(el => el === idRecipe)) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }

  return (
    <Card
      sx={{
        width: 800,
        display: "flex",
        borderRadius: "12px",
        background: "#f4f4f4",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
        margin: "20px auto",
        overflow: "hidden",
        height: "280px",
      }}
    >
      <CardMedia
        component="img"
        image={ recipe.urlImg }
        alt={ recipe?.title }
        sx={{ maxHeight: "100%", maxWidth: 300, background: 'gainsboro'}}
      />
      <Box
        sx={{
          width: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader
          avatar={
            <Avatar  sx={{ bgcolor: '#d56600' } } aria-label="recipe">
              {(recipe?.author?.name) ? (recipe?.author?.name as string)[0] : 'A'}
            </Avatar>
          }
          action={<ContextMenuDescription recipe={recipe} />}
          title={recipe.title}
        />
        <div className={style.card__rating}>
          <RatingRecipe recipe={recipe}/>
        </div>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gridGap: 16 }}
        >
          <Typography variant="body1" color="text.secondary">
            {recipe?.description.length > 60
              ? getMinDescription(59)
              : recipe.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Время приготовления: {recipe.time} минут
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <IconButton aria-label="add to favorites" onClick={() => handleFavorite( '61b8fce2705a4912a41b538c', recipe._id )} >
              <FavoriteIcon htmlColor={ isFavorite || books[0].recipesId.find(el => el === recipe._id) ? '#d56600' : ''} />
            </IconButton>
          </Box>
            <Button
            size="small" 
            onClick={() => onOpenModal(recipe._id)}
            >
              Посмотреть рецепт
            </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
