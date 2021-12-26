import { Button, IconButton, Input, List, ListItem } from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

interface State {
  name: string 
  placeholder: string 
}

export const IngredientList = () => {
  const [ingredients, setIngredients] = useState([
    { name: "", placeholder: "Ингредиент 1" },
  ]);
  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { name: "", placeholder: `Ингредиент ${ingredients.length + 1}` },
    ]);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>)  => {
    const curItem = ingredients.find(
      (item) => item.placeholder === (e.target as HTMLInputElement).placeholder
    ) as State;
    curItem.name = (e.target as HTMLInputElement).value;
    setIngredients([...ingredients]);
  };
  const deleteItem = (val: string) => {
    const arr = ingredients;
    arr.splice(
      arr.findIndex((item) => item.placeholder === val),
      1
    );
    setIngredients([...arr]);
  };
  return (
    <>
      <h4>Ингредиенты:</h4>
      <List>
        {ingredients.map((ingredient, idx) => (
          <ListItem key={ingredient.placeholder}>
            <Input
              placeholder={ingredient.placeholder}
              name={`ingredient-${idx}-description`}
              value={ingredient.name}
              onChange={handleInput}
              fullWidth={true}
              required={true}
              inputProps={{ "aria-label": "description" }}
            />
            <Input
              placeholder={'Объем'}
              name={`ingredient-${idx}-count`}
              required={true}
              style={{width: 100, marginLeft: 10}}
              inputProps={{ "aria-label": "description" }}
            />
            <IconButton onClick={() => deleteItem(ingredient.placeholder)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Button
        onClick={() => addIngredient()}
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
      >
        Добавить ингридиент
      </Button>
    </>
  );
};
