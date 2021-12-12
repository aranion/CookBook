import "./search.scss";
import { ChangeEvent, useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-block">
      <input
        className="search-block__input"
        placeholder="Название рецепта"
        type="text"
        value={search}
        onChange={handleSearch}
      />
      <button className="search-block__button">Расширенный поиск</button>
    </div>
  );
};
