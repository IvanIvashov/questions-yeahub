import Search from "../Search/Search";
import styles from "./sidebar.module.css";
import Specializations from "../Specialization";
import Skills from "../Skills";
import DifficultyLevel from "../DifficultyLevel";
import Rating from "../Rating";
import Status from "../Status";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <Search />
        <Specializations />
        <Skills />
        <DifficultyLevel />
        <Rating />
        <Status />
      </div>
    </div>
  );
}

export default SideBar;
