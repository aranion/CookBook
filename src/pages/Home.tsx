import { SlideShow, LastRecipes } from "components";
import { useActions } from "hooks/useActions";
import { useEffect } from "react";
import { useAppSelector } from "store";
import styles from "./pages.module.scss";

const Home = () => {
  const { fetchAllRecipes } = useActions();

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  const recipes = useAppSelector((state) => state.recipes.data);
  const sortedRecipes = recipes.sort((a, b) => b.rating - a.rating);

  return (
    <div className={styles.pages__center}>
      <SlideShow recipes={sortedRecipes.slice(0, 5)} />
      <LastRecipes recipes={recipes.slice(-3)} />
    </div>
  );
};

export default Home;
