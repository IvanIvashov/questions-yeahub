import FilterGroup from "../FilterGroup/FilterGroup";
import { RATING } from "../../Constants/constants";

function Rating() {
  const ratingItems = RATING.map((item, index) => ({
    id: `rating-${index}`,
    title: item,
  }));

  return (
    <div>
      <FilterGroup title={"Рейтинг"} items={ratingItems} />
    </div>
  );
}

export default Rating;
