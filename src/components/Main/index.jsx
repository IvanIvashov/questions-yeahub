import { useState } from "react";
import styles from "./main.module.css";

import Content from "../MainContent/Content";
import SideBar from "../SideBar";

function Main() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={styles.container}>
      <Content searchValue={searchValue} setSearchValue={setSearchValue} />
      <SideBar searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
}

export default Main;
