import styles from "./search.module.scss";
import { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className={styles['search-block']}>
      <div className={styles['search-block__container']}>
        <input
          className={styles['search-block__input']}
          placeholder="Название рецепта"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <SearchIcon className={styles['search-icon']} />
      </div>
      <button className={styles['search-block__button']}>Расширенный поиск</button>
    </div>
  );
};
