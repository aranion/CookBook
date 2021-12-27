import style from "./cookBooks.module.scss";
import { Divider, List, ListItem } from "@mui/material";
import { useState } from "react";
import imgDefaultGB from "../../assets/cbDefault.jpg";
import { Link, useLocation } from "react-router-dom";

const Cookbooks = () => {
  const [books] = useState([
    {
      photo: "",
      name: "Моя первая книга",
      description: "Разные рецепты по разным кухням, всё подряд.",
      count: 53,
      id: 1,
    },
    {
      photo: "",
      name: "Made in italy",
      description:
        "Самые вкусные рецепты итальянской кухни, разные виды пасты.",
      count: 15,
      id: 2,
    },
  ]);

  const match = useLocation();

  return (
    <div className={style.pages__center}>
      <div className={style.container}>
        <h1 className={style.title}>Список моих кулинарных книг</h1>
        <div>
          <List>
            <ListItem>
              <div className={style.item}>
                <div className={style.item__photo}>
                  <p>Обожка</p>
                </div>
                <p className={style.item__name}>Название книги</p>
                <p className={style.item__description}>Описание</p>
                <p className={style.item__count}>Количество рецептов</p>
              </div>
            </ListItem>
            <Divider />
            {books &&
              books.map((book) => {
                return (
                  <ListItem button={true} key={book.id}>
                    <Link to={`${match.pathname}/${book.id}`}>
                      <div className={style.item}>
                        <div className={style.item__photoBox}>
                          <img src={book.photo || imgDefaultGB} alt={book.name} />
                        </div>
                        <p className={style.item__name}>{book.name}</p>
                        <p className={style.item__description}>
                          {book.description}
                        </p>
                        <p className={style.item__count}>{book.count}</p>
                      </div>
                    </Link>
                  </ListItem>
                );
              })}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Cookbooks;
