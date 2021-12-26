import { useState, ChangeEvent } from "react";
import { Button, IconButton, Input, List, ListItem } from "@mui/material";
import style from "../addRecipeForm.module.scss";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

interface State {
  number: number,
  text: string,
};

export const StepsList = () => {
  const [steps, setSteps] = useState([
    { number: 1, text: "" },
  ]);
  const [urlImgStep, setUrlImgStep] = useState("")

  const addStep = () => {
    setSteps([...steps, { number: steps.length + 1, text: "" }]);
  };
  const deleteStep = (val: number) => {
    setSteps(state => state.filter(item=> item.number !== val))
  };
  const handleInput = (e: Event, number: number) => {
    const arr = steps;
    const curItem = arr.find((item) => item.number === number) as State;
    curItem.text = (e.target as HTMLDataElement).value;
    setSteps([...steps]);
  };

  const handleUrlImgStepChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlImgStep(e.target.value)
  }
  // @ts-ignore
  const handleBtn = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.target.nextSibling.click()
  }

  return (
    <>
      <List>
        {steps.map((step, idx) => (
          <ListItem key={step.number}>
            <p className={style['cooking__steps-number']}>Шаг {step.number}:</p>
            {/*<input*/}
            {/*    type="number"*/}
            {/*    hidden*/}
            {/*    name="stepNumber"*/}
            {/*    value={step.number}*/}
            {/*/>*/}
            <Input
              className={style.cooking__stepDescription}
              name={`step-${idx}-description`}
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
              onClick={handleBtn}
            >
              Фото
            </Button>
            <input
                type="file"
                hidden
                name={`urlImgStep-${idx}`}
                value={urlImgStep}
                onChange={handleUrlImgStepChange}
            />
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
