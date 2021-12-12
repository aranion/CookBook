import image from "../../assets/image4.png";
import "./small-recipe.scss";

export const SmallRecipe = () => {
  return (
    <div className="small-recipe">
      <h3> Макароны</h3>
      <img src={image} alt="" />
      <div className="small-recipe__info">
        <span>29.11.2021</span>
        <span>Cooker</span>
      </div>
    </div>
  );
};
