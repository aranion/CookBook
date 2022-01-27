import { Button, IconButton, List, ListItem, TextField } from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { Ingredients } from "models/Recipe";
import { useActions } from "hooks/useActions";

interface Props {
  ingredients: Ingredients[];
}

export const IngredientList = ({ingredients}: Props) => {

  const {
    addIngredientItem,
    delIngredientItem,
    setIngredientItem,
    setIngredientAmountItem,
  } = useActions();

  const addItem = () => {
    addIngredientItem();
  };
  const deleteItem = (value: string) => {
    delIngredientItem(value);
  };

  const handleIngredient = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    placeholder: string
  ) => {
    setIngredientItem({
      value: (e.target as HTMLInputElement).value,
      placeholder,
    });
  };
  const handleIngredientAmount = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    placeholder: string
  ) => {
    setIngredientAmountItem({
      value: (e.target as HTMLInputElement).value,
      placeholder,
    });
  };

  return (
    <>
      <h4>Ингредиенты:</h4>
      <List>
        {ingredients.map((ingredient, idx) => (
          <ListItem key={ingredient.placeholder}>
            <TextField
              placeholder={ingredient.placeholder}
              value={ingredient.description}
              size="small"
              onChange={(e) =>
                handleIngredient(e, ingredient.placeholder || "")
              }
              variant="standard"
              label={ingredient.placeholder}
              name={`ingredient-${idx}-description`}
              fullWidth={true}
              required={true}
              inputProps={{ "aria-label": "description" }}
            />
            <TextField
              placeholder="Объем"
              variant="standard"
              label="Объем"
              size="small"
              name={`ingredient-${idx}-count`}
              required={true}
              value={ingredient.count}
              onChange={(e) =>
                handleIngredientAmount(e, ingredient.placeholder || "")
              }
              style={{ width: 100, marginLeft: 10 }}
              inputProps={{ "aria-label": "description" }}
            />
            <IconButton
              onClick={() => deleteItem(ingredient.placeholder || "")}
            >
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
