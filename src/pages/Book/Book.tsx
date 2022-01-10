import { useParams } from "react-router";
import style from "./book.module.scss";
import { Chip, List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { RootState, useAppSelector } from "store";
import { BookState } from "store/book/types";
import { IRecipe } from "models/Recipe";
import { Loader } from "../../components";
import imgDefaultGB from "../../assets/cbDefault.jpg";

export const Book = () => {
  const { id } = useParams();
  const { setIsModal, fetchAllRecipes, fetchDataMemo } = useActions();
  const { loading, cookbook} = useAppSelector((state) => (state as RootState).book as BookState);
  const recipes = useAppSelector((state) => (state as RootState).recipes.data as IRecipe[]);

  const onOpen = (idRecipe: string) => setIsModal(idRecipe);

  useEffect(() => {
    // TODO пока не работает отдача рецептов с сервера, получаем все рецепты
    if(!recipes.length) fetchAllRecipes();
    // получение данных кулинарной книги
    fetchDataMemo(id);
  }, [recipes, id]);

  // Идет загрузка, рендерится прелоадер
  if (loading) {
    return (
      <div className={style.pages__center}>
        <div className={style.container}>
          <Loader />
        </div>
      </div>
    );
  }
  
  // Книга не найдены, рендерится уведомление
  if (!cookbook.hasOwnProperty("title") ) {
    return <div className={style.pages__center}>
      <div className={style.container}>
        <h3>Книга не найдена</h3>
      </div>
    </div>
  }

  return (
    <div className={style.pages__center}>
      <div className={style.container}>
        <div className={style.book__left}>
          <h1 className={style.title}>{cookbook.title}</h1>
          <div className={style.book__cover}>
            <img src={cookbook.photo || imgDefaultGB} alt={cookbook.title} />
          </div>
          <p className={style.book__description}>{cookbook.description}</p>
        </div>
        <div className={style.book__right}>
          <h2 className={style.book__header}>
            Всего рецептов: {cookbook.recipesId.length}
          </h2>
          <List>
            {recipes &&
              recipes
                // фильтруем все рецепты и передаем только те которые в книге... 
                // .filter(recipe => cookbook.recipesId.indexOf(recipe._id) !== -1 ? false : true) 
                .map((recipe) => {
                  if (cookbook.recipesId.indexOf(recipe._id) !== -1 ) {
                    return (
                      <ListItem 
                        button={true} 
                        key={recipe._id} 
                        onClick={() => onOpen((recipe._id).toString())}
                      >
                        <div className={style.item}>
                          <div className={style.item__photoBox}>
                            <img src={recipe.urlImg} alt={recipe.title} />
                          </div>
                          <div className={style.item__content}>
                            <h3 className={style.item__name}>{recipe.title}</h3>
                            <p className={style.item__description}>
                              {recipe.description}
                            </p>
                            <div>
                              {recipe.ingredients.map((item, i) => (
                                <Chip
                                  size="small"
                                  label={item.description}
                                  className={style.item__chip}
                                  key={i}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </ListItem>
                    );
                  }
                  return ''               
              })
              }
          </List>
        </div>
      </div>
    </div>
  );
};
