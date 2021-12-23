import { Button, IconButton, Input, List, ListItem } from "@mui/material";
import style from "../addRecipeForm.module.scss";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";

interface State {
  number: number,
  text: string,
};

export const StepsList = () => {
  const [steps, setSteps] = useState([
    { number: 1, text: "" },
  ]);
  const addStep = () => {
    setSteps([...steps, { number: steps.length + 1, text: "" }]);
  };
  const deleteStep = (val: number) => {
    const arr = steps;

    arr.splice(
      arr.findIndex((item) => item.number === val),
      1
    );
    arr.forEach((item, idx) => {
      item.number = idx + 1;
    });
    setSteps([...arr]);
  };
  const handleInput = (e: Event, number: number) => {
    const arr = steps;
    const curItem = arr.find((item) => item.number === number) as State;
    curItem.text = (e.target as HTMLDataElement).value;
    setSteps([...steps]);
  };
  return (
    <>
      <List>
        {steps.map((step) => (
          <ListItem key={step.number}>
            <p className={style['cooking__steps-number']}>Шаг {step.number}:</p>
            <Input
              className={style.cooking__stepDescription}
              value={step.text}
              onChange={((e: Event) => handleInput(e, step.number)) as never }
              placeholder={"Описание"}
              inputProps={{ "aria-label": "description" }}
            />
            <Button
              variant="contained"
              color="primary"
              size={"small"}
              endIcon={<AddIcon />}
            >
              Фото
            </Button>
            <IconButton onClick={() => deleteStep(step.number)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
        onClick={() => addStep()}
      >
        Добавить шаг
      </Button>
    </>
  );
};
