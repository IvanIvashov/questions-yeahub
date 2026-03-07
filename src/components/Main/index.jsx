import styles from "./main.module.css";

import Content from "../MainContent/Content";
import SideBar from "../SideBar/SideBar";

function Main() {
  return (
    <div className={styles.container}>
      <Content />
      <SideBar />
    </div>
  );
}

export default Main;
