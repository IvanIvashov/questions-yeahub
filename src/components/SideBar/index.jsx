import Search from "../Search";
import styles from "./sidebar.module.css";
import Specializations from "../Specialization";
import Skills from "../Skills";
import FilterSection from "../FilterSection";
import { LEVEL, RATING, STATUS } from "../../Constants/constants";

function SideBar({ searchValue, setSearchValue }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Specializations />
        <Skills />
        <FilterSection
          title="Уровень сложности"
          itemsArr={LEVEL}
          baseId="level"
        />
        <FilterSection title="Рейтинг" itemsArr={RATING} baseId="rating" />
        <FilterSection title="Статус" itemsArr={STATUS} baseId="status" />
      </div>
    </div>
  );
}

export default SideBar;
