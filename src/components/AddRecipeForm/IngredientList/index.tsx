import { Button, IconButton, Input, List, ListItem } from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { RootState, useAppSelector } from "store";
import { AddRecipeState } from "store/addRecipe/types";
import { Ingredients } from "models/Recipe";
import { useActions } from "hooks/useActions";

export const IngredientList = () => {

  const ingredients: Ingredients[] = useAppSelector((state: RootState) => 
    (state.addRecipe as AddRecipeState).inputFields.ingredients
  );

  const {
    addIngredientItem, 
    delIngredientItem,
    setIngredientItem, 
    setIngredientAmountItem
  } = useActions();

  const addItem = () => {
    addIngredientItem();
  };
  const deleteItem = (value: string) => {
    delIngredientItem(value);
  };
  
  const handleIngredient = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, placeholder: string)  => {
    setIngredientItem({value: (e.target as HTMLInputElement).value, placeholder});
  };
  const handleIngredientAmount = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, placeholder: string)  => {
    setIngredientAmountItem({value: (e.target as HTMLInputElement).value, placeholder});
  };
  
  return (
    <>
      <h4>Ингредиенты:</h4>
      <List>
        {ingredients.map((ingredient, idx) => (
          <ListItem key={ingredient.placeholder}>
            <Input
              placeholder={ingredient.placeholder}
              value={ingredient.ingredient}
              onChange={(e) => handleIngredient(e, ingredient.placeholder || '')}
              name={`ingredient-${idx}-description`}
              //конфликт// value={ingredient.name}
              //конфликт// onChange={handleInput}
              fullWidth={true}
              required={true}
              inputProps={{ "aria-label": "description" }}
            />
            <Input
              placeholder={'Объем'}
              name={`ingredient-${idx}-count`}
              required={true}
              value={ingredient.amount}
              onChange={(e) => handleIngredientAmount(e, ingredient.placeholder || '')}
              style={{width: 100, marginLeft: 10}}
              inputProps={{ "aria-label": "description" }}
            />
            <IconButton onClick={() => deleteItem(ingredient.placeholder || '')}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Button
        onClick={() => addItem()}
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
      >
        Добавить ингредиент
      </Button>
    </>
  );
};
