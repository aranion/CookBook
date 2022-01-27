import styles from "./cookBooks.module.scss";
import { Button, Divider, IconButton, Input, List, ListItem } from "@mui/material";
import {  useEffect, useState } from "react";
import imgDefaultGB from "../../assets/cbDefault.jpg";
import { Link, useLocation } from "react-router-dom";
import { Loader } from "components";
import favoriteBookImg from "../../assets/favoritesBook.png"; 
import { RootState, useAppSelector } from "store";
import { useActions } from "hooks/useActions";
import { CookbooksState } from "store/cookbooks/types";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ProfileState } from "store/profile/types";
// import DeleteIcon from '@mui/icons-material/Delete';

const Cookbooks = () => {
 // TODO ВСЕ ПЕРЕДЕЛАТЬ...
  const [ isAddFormBook, setAddFormBook ] = useState(false);
  const [ titleBook, setTitleBook ] = useState('Новая книга');
  const [ descriptionBook, setDescriptionBook ] = useState('Самые вкусные рецепты');

  const { fetchCookbooks, setCookbooks } = useActions();
  const { loading, books } = useAppSelector((state) => (state as RootState).cookbooks as CookbooksState);
  const { user } = useAppSelector((state) => (state as RootState).profile as ProfileState);
  const match = useLocation();

  useEffect(() => {
    // получение с сервера кулинарных книги
    fetchCookbooks();
  }, []);

  const handleCreateBook = () => {
    setAddFormBook(!isAddFormBook);
  }
  const handleSubmitBook = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCookbooks(
      {
        photo: "",
        title: titleBook,
        description: descriptionBook,
        cuisine: "Пока так...",
        user: user?.id || '',
        recipesId: []
      })
  }
  const handleDescriptionBook = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log(e.target.value);
    setDescriptionBook(e.target.value);
  }

  const handleTitleBook = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log(e.target.value);
    setTitleBook(e.target.value);
  }
  // const handleDeleteBook = (id:string) => {

  // }

  if(loading) {
    return <div className={styles.pages__center}>
      <div className={styles.container}>
        <Loader />
      </div>
    </div>
  }
  
  if(books.length === 0 ) {
    return <div className={styles.pages__center}>
      <div className={styles.container}>
        Кулинарные книги не найдены...
      </div>
    </div>
  }

  return (
    <div className={styles.pages__center}>
      <div className={styles.container}>
        <h1 className={styles.title}>Список моих кулинарных книг</h1>
        <div>
          {loading 
            ? <Loader /> 
            : <List>
            <ListItem>
              <div className={styles.item}>
                <div className={styles.item__photo}>
                  <p>Обложка</p>
                </div>
                <p className={styles.item__name}>Название книги</p>
                <p className={styles.item__description}>Описание</p>
                <p className={styles.item__count}>Количество рецептов</p>
              </div>
            </ListItem>
            <Divider />
            {books &&
              books.map((book, i:number) => {
                return (
                  <ListItem button={true} key={ book._id || i}>
                    <Link
                      to={`${match.pathname}/${book._id}`}
                      className={styles.link}
                    >
                      <div className={styles.item}>
                        <div className={styles.item__photoBox}>
                          <img src={
                            i === 0 
                            ? favoriteBookImg 
                            : book.photo || imgDefaultGB
                          } alt={book.title} />
                        </div>
                        <p className={styles.item__name}>{book.title !== 'Книга 1' ? book.title : 'Избранные рецепты' }</p> 
                        <p className={styles.item__description}>
                          {book.description !== 'string' ? book.description : 'Здесь находятся понравившиеся рецепты.'}
                        </p>
                        <p className={styles.item__count}>{book.recipesId.length}</p>
                        <p className={styles.item__menu}>
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        </p>
                      </div>
                    </Link>
                    {/* <DeleteIcon onClick={() => handleDeleteBook(book._id)}/> */}
                  </ListItem>
                );
              })}
          </List>
          }
        </div>
        <Button onClick={handleCreateBook} variant="contained">Добавить книгу</Button>
        {
          isAddFormBook 
            ? <form 
                onSubmit={(e) => handleSubmitBook(e)}
                className={styles.addForm__wrapper}
              >
                  <Input
                      placeholder={"Название книги"}
                      name="titleBook"
                      value={titleBook}
                      onChange={(e) => handleTitleBook(e)}
                      required={true}
                      fullWidth={true}
                      inputProps={{ "aria-label": "description" }}
                    />
                  <Input
                      placeholder={"Описание книги"}
                      name="descriptionBook"
                      required={true}
                      value={descriptionBook}
                      onChange={(e) => handleDescriptionBook(e)}
                      fullWidth={true}
                      inputProps={{ "aria-label": "description" }}
                    />
                <Button sx={{minWidth: 100  }} type='submit' variant="contained">Создать</Button>
              </form>
            : <></>
        }
        
      </div>
    </div>
  );
};

export default Cookbooks;
