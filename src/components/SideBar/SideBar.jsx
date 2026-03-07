import CategoryBlock from "../CategoryBlock";
import Search from "../Search/Search";
import styles from "./sidebar.module.css";
import imgFigma from "../CategoryBlock/img/icon1.svg";

function SideBar() {
  const specialization = [
    "UI/UX designe",
    "Frontend developer",
    "Backed developer",
    "Fullstack",
    "Figma",
  ];

  const skills = ["Figma", "CSS", "React", "HTML"];
  const level = ["1-3", "4-6", "7-8", "9-10"];
  const rating = ["1", "2", "3", "4", "5"];
  const status = ["Изученные", "Неизученные", "Все"];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <Search />
        <CategoryBlock title="Специализация" arr={specialization} showAll />
        <CategoryBlock title="Навыки" arr={skills} icon={imgFigma} showAll />
        <CategoryBlock title="Уровень сложности" arr={level} />
        <CategoryBlock title="Рейтинг" arr={rating} />
        <CategoryBlock title="Статус" arr={status} />
      </div>
    </div>
  );
}

export default SideBar;
