import { AddRecipeForm } from "../components";
import styles from "./pages.module.scss";

const AddRecipe = () => {
  return (
    <div className={styles.pages__center}>
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipe;
