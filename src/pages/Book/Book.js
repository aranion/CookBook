import { useParams } from "react-router";
import style from "./book.module.scss";
import { Chip, List, ListItem } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { $api } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";

export const Book = () => {
  let { id } = useParams();
  // TODO заглушка ID
  id = "61b8fce2705a4912a41b538c";
  const { getBook } = useActions();
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([
    {
      title: "Паста",
      id: 1,
      urlImg: "",
      description:
        "Нежнейшая паста карбонара с яйцом и сливками приготовленная по старинному рейепту",
      ingredients: ["макароны", "сливки", "бекон", "соус"],
    },
    {
      title: "Мясо по французски",
      id: 2,
      urlImg: "",
      description: "Кортошка с мясом в духовке",
      ingredients: ["картошка", "мясо", "соус"],
    },
  ]);
  const [ingredientList, setIngredientLis] = useState({});
  const [book, setBook] = useState(useSelector((state) => state.book));

  const fetchDataMemo = useCallback(async () => {
    const { data } = await $api.get(`/cookbook/get/${id}`);
    console.log("книга из базы: ", data);
    return data;
  }, [id]);
  useEffect(() => {
    const curList = {};
    recipes.forEach((recipe) =>
      recipe.ingredients.forEach((ingredient) => {
        if (curList.hasOwnProperty(ingredient)) {
          curList[ingredient] += 1;
          setIngredientLis(curList);
        } else {
          curList[ingredient] = 1;
          setIngredientLis(curList);
        }
      })
    );
    fetchDataMemo().then((data) => {
      dispatch(getBook(data));
      setBook(data);
    });
  }, [recipes, fetchDataMemo]);
  return (
    <>
      <div className={style.pages__center}>
        {book.hasOwnProperty("title") ? (
          <div className={style.container}>
            <div className={style.book__left}>
              <h1 className={style.title}>{book.title}</h1>
              <div className={style.book__cover}>
                <img src={book.photo} alt="" />
              </div>
              <p className={style.book__description}>{book.description}</p>
              <div>
                {Object.keys(ingredientList).map((ingredient) => (
                  <Chip
                    size="small"
                    label={ingredient + " " + ingredientList[ingredient]}
                    key={ingredient}
                    className={style.book__chip}
                    color={"secondary"}
                  />
                ))}
              </div>
            </div>
            <div className={style.book__right}>
              <h2 className={style.book__header}>
                Всего рецептов: {recipes.length}
              </h2>
              <List>
                {recipes &&
                  recipes.map((recipe) => {
                    return (
                      <ListItem button={true} key={recipe.id}>
                        <div className={style.item}>
                          <div className={style.item__photoBox}>
                            <img src={recipe.urlImg} alt="recipe" />
                          </div>
                          <div className={style.item__content}>
                            <h3 className={style.item__name}>{recipe.title}</h3>
                            <p className={style.item__description}>
                              {recipe.description}
                            </p>
                            <div>
                              {recipe.ingredients.map((ingredient) => (
                                <Chip
                                  size="small"
                                  label={ingredient}
                                  className={style.item__chip}
                                  key={ingredient}
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
        ) : (
          <h1>Книга не найдена</h1>
        )}
      </div>
    </>
  );
};
