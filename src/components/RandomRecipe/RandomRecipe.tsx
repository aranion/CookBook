import "./random-recipe.scss";
import image from "../../assets/image2.png";
import PrintIcon from "@mui/icons-material/Print";

export const RandomRecipe = () => {
  const author = "Cooker";

  return (
    <div className="random-recipe-block">
      <h3 className="random-recipe-block__header">Случайный рецепт</h3>
      <div className="random-recipe-block__info">
        <img src={image} alt="" />
        <div className="info-container">
          <div className="info-container__list">
            <div className="heading-container">
              <span className="heading-container__header">
                Картофель жареный
              </span>
              <PrintIcon />
            </div>
            <ul>
              <li>Картоха</li>
              <li>Лук</li>
              <li>Масло</li>
            </ul>
            <span>~48 min</span>

            <div className="info-container__added">
              <span>{author}</span>
              <a href="#">Посмотреть рецепт...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
