import { useState } from "react";
import styles from "./search.module.css";

import search from "./search.svg";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      alert("Поиск начался");
      setSearchValue("");
    }
  }
  return (
    <div className={styles.search}>
      <label htmlFor="search">
        <img className={styles.icon} src={search} alt="Иконка поиска" />
      </label>
      <input
        name="search"
        id="search"
        value={searchValue}
        className={styles.input}
        placeholder="Введите запрос..."
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Search;
