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
  Rating,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IRecipe } from "models/Recipe";
import imgDefaultGB from "../../assets/cbDefault.jpg";
import { useActions } from "hooks/useActions";
import { ContexMenuDescription } from "components/Simples";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./recipeCard.module.scss";
import { $api } from "../../api/api";

export const RecipeCard = ({ recipe }: { recipe: IRecipe }) => {
  const { setIsModal } = useActions();
  const dispatch = useDispatch();
  console.log("рецепт: ", recipe);
  const [rating, setRating] = useState(Number(recipe.rating));

  const onOpenModal = (idRecipe: string) => setIsModal(idRecipe);
  const getMinDescription = (value: number): string => {
    let str: string = recipe.description.substring(0, value);
    str += "...";
    return str;
  };
  useEffect(() => {});
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
        image={recipe?.urlImg || imgDefaultGB}
        alt={recipe?.title}
        sx={{ maxHeight: "100%", maxWidth: 300 }}
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
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={<ContexMenuDescription recipe={recipe} />}
          title={recipe.title}
        />
        <div className={style.card__rating}>
          <Rating
            name="size-medium"
            value={rating}
            precision={0.5}
            onChange={(event, newValue) => {
              setRating(Number(newValue));
              const curRecipe = {
                id: recipe._id,
                rating: newValue,
              };
              $api.post("/recipes/modify", curRecipe);
            }}
          />
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
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </Box>
          <Button size="small" onClick={() => onOpenModal(recipe._id)}>
            Посмотреть рецепт
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
