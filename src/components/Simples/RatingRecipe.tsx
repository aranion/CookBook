import { Rating } from "@mui/material";
import { useActions } from "hooks/useActions";
import { IRecipe } from "models/Recipe";

interface Props {
  recipe: IRecipe;
}

export const RatingRecipe = ({recipe}: Props) => {

  const { modifyRecipe } = useActions();

  const handleRating = (e: React.SyntheticEvent<Element, Event>, id:string,  newValue: number | null) => {
    e.preventDefault();
    modifyRecipe({id, rating: newValue || 0});
  }

  return (
    <>
      <Rating
        name="size-medium"
        value={recipe.rating}
        precision={0.5}
        sx={{ padding: 0}}
        onChange={(e, newValue: number | null) => handleRating(e, recipe._id, newValue)}
      />
    </>
    
  );
};
