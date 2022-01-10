import { Rating } from "@mui/material";
import { useActions } from "hooks/useActions";
import { IRecipe } from "models/Recipe";

interface Props {
  recipe: IRecipe;
}

export const RetingRecipe = ({recipe}: Props) => {

  const { modifyRecipe } = useActions();

  const handleRating = (e: React.SyntheticEvent<Element, Event>, id:string,  newValue: number | null) => {
    e.preventDefault();
    modifyRecipe({id, rating: newValue || 0});
    // modifyRecipe({id:"61dc3b1b254a87e9ad0a5a91", urlImg: "/t5.jpg"});
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
