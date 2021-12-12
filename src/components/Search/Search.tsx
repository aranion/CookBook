import "./search.scss";
import { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-block">
      <div className="search-block__container">
        <input
          className="search-block__input"
          placeholder="Название рецепта"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <SearchIcon className="search-icon" />
      </div>
      <button className="search-block__button">Расширенный поиск</button>
    </div>
  );
};
