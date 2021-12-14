import { Header } from "../../components";
import { AddRecipeForm } from "../../components/AddRecipeForm";
import styles from "../Home/home.module.scss";

export const AddRecipe = () => {
  return (
    <div className={styles.home}>
      <Header />
      <AddRecipeForm></AddRecipeForm>
    </div>
  );
};
