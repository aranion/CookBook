import Carousel from "react-material-ui-carousel";
import { RandomRecipe, Loader } from "..";
import { IRecipe } from "../../models/Recipe";
import styles from "./slideShow.module.scss";

export const SlideShow = ({ recipes }: { recipes: IRecipe[] }) => {
  if (!recipes || recipes.length === 0)
    return (
      <div className={styles["slide-show-block"]}>
        <Loader />
      </div>
    );
  return (
    <div>
      <h3 className={styles["slide-show__header"]}>Популярные рецепты</h3>
      <Carousel
        navButtonsWrapperProps={{   
            style: {
                top: '140px',
                height: 'auto'
            }
        }} 
        indicatorIconButtonProps={{
            style: {
                padding: '5px',    // 1
                margin:'5px 0'
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {}
        }}
        indicatorContainerProps={{
            style: {
              maxWidth: '180px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-evenly',
              borderEndEndRadius: '10px',
              borderEndStartRadius: '10px',
              background: '#f4f4f4'
            }
        }}>
        {recipes.map((recipe, i) => (
          <RandomRecipe recipe={recipe} key={i} />
        ))}
      </Carousel>
    </div>
    
  );
};
