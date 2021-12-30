import { IconButton } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import { PrintElem } from "components";
import ShareIcon from '@mui/icons-material/Share';
import { IRecipe } from "models/Recipe";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './contexMenu.module.scss';
import AddIcon from '@mui/icons-material/Add';

export const ContexMenuDescription = ({recipe}:{recipe:IRecipe}) => {

  const [ isVisible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
  <div className={`${styles['context-menu__wrapper']} ${isVisible || styles['context-menu__bg'] }`}>
      {isVisible ||  
        <div className={styles['context-menu__actions']}>
          <AddIcon />
          <DeleteIcon />
          <EditIcon />
          <ShareIcon />
          <PrintElem recipe={recipe} />
        </div>
      }
      <IconButton
        aria-label="more"
        id="long-button"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
    </div>
  );
};
