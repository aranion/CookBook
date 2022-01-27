import { ChangeEvent } from "react";
import { Button, IconButton, List, ListItem, TextField } from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./stepsList.module.scss";
import { StepData } from "models/Recipe";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useActions } from "hooks/useActions";

interface Props {
  steps: StepData[];
}

export const StepsList = ({steps}: Props) => {

  const { addStep, delStep, setStepDescription, setUrlImgStep } = useActions();

  const addStepItem = () => addStep();
  const deleteStepItem = (value: string) => delStep(value);
  const handleStepItem = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, title: string) => {
    setStepDescription({description: (e.target as HTMLInputElement).value, title});
  };
  const handleUrlImgStepChange = (e: ChangeEvent<HTMLInputElement>, idElem: string, id:number) => {
    const img: any = e.target.parentNode?.querySelector(`#${idElem}`);
    img.src = URL.createObjectURL((e.target as any).files[0]);
    img.style.display = "block";
    setUrlImgStep({img: e.target.value, id});
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
            <TextField
              className={styles.cooking__stepDescription}
              name={`step-${idx}-description`}
              value={step.description}
              label={step.title}
              onChange={(e) => handleStepItem(e, step.title)}
              placeholder={"Описание"}
              multiline
              rows={4}
              variant="outlined"
              inputProps={{ "aria-label": "description" }}
              required
            />
            <IconButton onClick={() => deleteStepItem(step.title)}>
              <DeleteIcon />
            </IconButton>

            <div className={styles["steps__container"]}>
              <div className={styles["steps__photoStep"]}>
                {step.img
                  ? ''
                  : <AddPhotoAlternateIcon />
                }
                <img className={styles["steps__img"]} src="" id={`urlImgStep-${idx}`} alt=' '/>
              </div>
              <Button
                variant="contained"
                color="primary"
                size={"small"}
                endIcon={<AddIcon />}
                onClick={handleBtn}
                sx={{width: '100%', position: 'absolute', bottom: 0 }} 
              >
                Фото
              </Button>
              <input
                type="file"
                hidden
                name={`urlImgStep-${idx}`}
                onChange={ (e) => handleUrlImgStepChange(e, `urlImgStep-${idx}`, idx)}
            />
            </div>
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
