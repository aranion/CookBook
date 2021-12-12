import image from "../../assets/image4.png";
import "./recipe.scss";

export const Recipe = () => {
  return (
    <div className="recipe">
      <h3> Макароны</h3>
      <img src={image} alt="" />
      <div className="recipe__info">
        <span>29.11.2021</span>
        <span>Cooker</span>
      </div>
    </div>
  );
};
