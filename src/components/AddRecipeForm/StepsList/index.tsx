import { ChangeEvent, useState } from "react";
import { Button, IconButton, Input, List, ListItem } from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./stepsList.module.scss";
import { StepData } from "models/Recipe";
import { RootState, useAppSelector } from "store";
import { AddRecipeState } from "store/addRecipe/types";
import { useActions } from "hooks/useActions";

export const StepsList = () => {

  // переделать нв STORE
  const [urlImgStep, setUrlImgStep] = useState("");

  const {addStep, delStep, setStepDescription} = useActions();
  
  const steps: StepData[] = useAppSelector((state: RootState) => 
    (state.addRecipe as AddRecipeState).inputFields.steps
  );

  const addStepItem = () => {
    addStep();
  };
  const deleteStepItem = (value: string) => {
    delStep(value);
  };
  const handleStepItem = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, title: string) => {
    setStepDescription({description: (e.target as HTMLInputElement).value, title});
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
          <ListItem key={step.title}>
            <p className={styles['cooking__steps-number']}>{step.title}:</p>
            <Input
              className={styles.cooking__stepDescription}
              name={`step-${idx}-description`}
              value={step.description}
              onChange={(e) => handleStepItem(e, step.title)}
              placeholder={"Описание"}
              inputProps={{ "aria-label": "description" }}
              required
            />
            <IconButton onClick={() => deleteStepItem(step.title)}>
              <DeleteIcon />
            </IconButton>
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
            { /*конфликт <IconButton onClick={() => deleteStep(step.number)}>
                конфликт<DeleteIcon />
                конфликт</IconButton> */}
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
        fullWidth={true}
        onClick={() => addStepItem()}
      >
        Добавить шаг
      </Button>
    </>
  );
};
