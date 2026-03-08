import FilterGroup from "../FilterGroup/FilterGroup";
import { LEVEL } from "../../Constants/constants";

function DifficultyLevel() {
  const levelItems = LEVEL.map((level, index) => ({
    id: `level-${index}`,
    title: level,
  }));
  return (
    <div>
      <FilterGroup title={"Уровень сложности"} items={levelItems} />
    </div>
  );
}

export default DifficultyLevel;
