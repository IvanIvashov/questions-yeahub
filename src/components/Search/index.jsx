import { useState } from "react";
import styles from "./search.module.css";

import closeBtn from "./closeBtn.svg";
import search from "./search.svg";

function Search({ searchValue, setSearchValue }) {
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
      />
      {searchValue && (
        <img
          className={styles.closeButton}
          src={closeBtn}
          alt=""
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
}

export default Search;
