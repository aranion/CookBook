import style from "./cookBooks.module.scss";
import { Divider, IconButton, List, ListItem } from "@mui/material";
import {  useEffect } from "react";
import imgDefaultGB from "../../assets/cbDefault.jpg";
import { Link, useLocation } from "react-router-dom";
import { Loader } from "components";
import favoriteBookImg from "../../assets/favoritesBook.png"; 
import { RootState, useAppSelector } from "store";
import { useActions } from "hooks/useActions";
import { CookbooksState } from "store/cookbooks/types";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Cookbooks = () => {

  const { fetchCookbooks } = useActions();
  const { loading, books } = useAppSelector((state) => (state as RootState).cookbooks as CookbooksState);
  const match = useLocation();


  useEffect(() => {
    // получение с сервера кулинарных книги
    fetchCookbooks();
  }, []);

  if(loading) {
    return <div className={style.pages__center}>
      <div className={style.container}>
        <Loader />
      </div>
    </div>
  }
  
  if(books.length === 0 ) {
    return <div className={style.pages__center}>
      <div className={style.container}>
        Кулинарные книги не найдены...
      </div>
    </div>
  }

  return (
    <div className={style.pages__center}>
      <div className={style.container}>
        <h1 className={style.title}>Список моих кулинарных книг</h1>
        <div>
          {loading 
            ? <Loader /> 
            : <List>
            <ListItem>
              <div className={style.item}>
                <div className={style.item__photo}>
                  <p>Обложка</p>
                </div>
                <p className={style.item__name}>Название книги</p>
                <p className={style.item__description}>Описание</p>
                <p className={style.item__count}>Количество рецептов</p>
              </div>
            </ListItem>
            <Divider />
            {books &&
              books.map((book, i:number) => {
                return (
                  <ListItem button={true} key={ book.name || book.id }>
                    <Link
                      to={`${match.pathname}/${book.id}`}
                      className={style.link}
                    >
                      <div className={style.item}>
                        <div className={style.item__photoBox}>
                          <img src={
                            i === 0 
                            ? favoriteBookImg 
                            : book.photo || imgDefaultGB
                          } alt={book.name} />
                        </div>
                        <p className={style.item__name}>{book.name}</p>
                        <p className={style.item__description}>
                          {book.description}
                        </p>
                        <p className={style.item__count}>{book.count}</p>
                        <p className={style.item__menu}>
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        </p>
                      </div>
                    </Link>
                  </ListItem>
                );
              })}
          </List>
          }
        </div>
      </div>
    </div>
  );
};

export default Cookbooks;
