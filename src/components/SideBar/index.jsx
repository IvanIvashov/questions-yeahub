import Search from "../Search";
import styles from "./sidebar.module.css";
import Specializations from "../Specialization";
import Skills from "../Skills";
import DifficultyLevel from "../DifficultyLevel";
import FilterSection from "../FilterSection";
import { RATING, STATUS } from "../../Constants/constants";

function SideBar({ searchValue, setSearchValue }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Specializations />
        <Skills />
        <DifficultyLevel />
        <FilterSection title="Рейтинг" itemsArr={RATING} baseId="rating" />
        <FilterSection title="Статус" itemsArr={STATUS} baseId="status" />
      </div>
    </div>
  );
}

export default SideBar;
