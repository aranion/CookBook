import { Button, IconButton, Input, List, ListItem } from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

export const IngredientList = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Макароны", placeholder: "Ингредиент 1" },
    { name: "Молоко", placeholder: "Ингредиент 2" },
  ]);
  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { name: "", placeholder: `Ингредиент ${ingredients.length + 1}` },
    ]);
  };
  const handleInput = (e) => {
    const curItem = ingredients.find(
      (item) => item.placeholder === e.target.placeholder
    );
    curItem.name = e.target.value;
    setIngredients([...ingredients]);
  };
  const deleteItem = (val) => {
    const arr = ingredients;
    arr.splice(
      arr.findIndex((item) => item.placeholder === val),
      1
    );
    setIngredients([...arr]);
  };
  return (
    <>
      <Button
        onClick={() => addIngredient()}
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
      >
        Добавить ингридиент
      </Button>
      <List>
        {ingredients.map((ingredient) => (
          <ListItem key={ingredient.placeholder}>
            <Input
              placeholder={ingredient.placeholder}
              value={ingredient.name}
              onChange={handleInput}
              fullWidth={true}
              inputProps={{ "aria-label": "description" }}
            />
            <IconButton onClick={() => deleteItem(ingredient.placeholder)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
