import { useParams } from "react-router";
import style from "./book.module.scss";
import { Chip, List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { RootState, useAppSelector } from "store";
import { BookState } from "store/book/types";
import { IRecipe } from "models/Recipe";
import { Loader } from "../../components";

export const Book = () => {

  const { id } = useParams();
  const { setIsModal, fetchAllRecipes, fetchDataMemo } = useActions();
  const { loading, data } = useAppSelector((state) => (state as RootState).book as BookState);
  const recipes = useAppSelector((state) => (state as RootState).recipes.data as IRecipe[]);

  const onOpen = (idRecipe: string) => setIsModal(idRecipe);

  useEffect(() => {
    // получение с сервера рецептов книги
    if(!recipes.length) fetchAllRecipes();
    // получение данных кулинарной книги
    fetchDataMemo(id);   
  }, [recipes, id]);

  // Идет загрузка, рендерится прелоадер
  if(loading) {
    return <div className={style.pages__center}>
      <div className={style.container}>
        <Loader />
      </div>
    </div>
  }

  // Книга не найдены, рендерится уведомление
  if (!data.hasOwnProperty("title") ) {
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
          <h1 className={style.title}>{data.title}</h1>
          <div className={style.book__cover}>
            <img src={data.photo} alt={data.title} />
          </div>
          <p className={style.book__description}>{data.description}</p>
        </div>
        <div className={style.book__right}>
          <h2 className={style.book__header}>
            Всего рецептов: {recipes.length}
          </h2>
          <List>
            {recipes &&
              recipes
                // фильтруем все рецепты и передаем только те которые в книге... 
                .filter(recipe => data.recipesId.indexOf(recipe.id) !== -1 ? false : true) 
                .map((recipe) => {
                return (
                  <ListItem 
                    button={true} 
                    key={recipe.id} 
                    onClick={() => onOpen((recipe.id).toString())}
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
                              label={item.ingredient}
                              className={style.item__chip}
                              key={i}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </ListItem>
                );
              })}
          </List>
        </div>
      </div>
    </div>
  );
};
