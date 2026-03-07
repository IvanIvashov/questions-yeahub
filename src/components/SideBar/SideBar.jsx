import CategoryBlock from "../CategoryBlock";
import Search from "../Search/Search";
import styles from "./sidebar.module.css";
import imgFigma from "../CategoryBlock/img/icon1.svg";
import { SPECIALIZATION } from "../../Constants/constants";
import { SKILLS } from "../../Constants/constants";
import { LEVEL } from "../../Constants/constants";
import { RATING } from "../../Constants/constants";
import { STATUS } from "../../Constants/constants";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <Search />
        <CategoryBlock title="Специализация" arr={SPECIALIZATION} showAll />
        <CategoryBlock title="Навыки" arr={SKILLS} icon={imgFigma} showAll />
        <CategoryBlock title="Уровень сложности" arr={LEVEL} />
        <CategoryBlock title="Рейтинг" arr={RATING} />
        <CategoryBlock title="Статус" arr={STATUS} />
      </div>
    </div>
  );
}

export default SideBar;
