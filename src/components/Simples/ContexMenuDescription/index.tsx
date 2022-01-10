import { IconButton } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import { PrintDownloadElem } from "components";
import ShareIcon from '@mui/icons-material/Share';
import { IRecipe } from "models/Recipe";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './contexMenu.module.scss';
import AddIcon from '@mui/icons-material/Add';
import { useActions } from "hooks/useActions";
import { useAppSelector } from "store";
import { ProfileState } from "store/profile/types";

export const ContexMenuDescription = ({recipe}:{recipe:IRecipe}) => {

  const [ isVisible, setVisible] = useState(true);

  const profile = useAppSelector(state => state.profile as ProfileState);

  const { deleteRecipe } = useActions();

  const handleClick = () => {
    setVisible(!isVisible);
  };
  const handleDeleteRecipe = (id:string) => {
    deleteRecipe(id);
  }

  return (
  <div className={`${styles['context-menu__wrapper']} ${isVisible || styles['context-menu__bg'] }`}>
      {isVisible ||  
        <div className={styles['context-menu__actions']}>
          {
            profile.isAuth  // УБРАТЬ когда можно будет сравнивать id пользователя и id рецепта
            // profile.user?.id === recipe._id 
            && <div>
                   <DeleteIcon onClick={() => handleDeleteRecipe(recipe._id)}/>
                   <EditIcon />
                 </div>
          }
          <AddIcon />
          <ShareIcon />
          <PrintDownloadElem recipe={recipe} isPtint={true}/>
          <PrintDownloadElem recipe={recipe} isPtint={false}/>
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
