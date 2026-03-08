import FilterGroup from "../FilterGroup/FilterGroup";
import { STATUS } from "../../Constants/constants";

function Status() {
  const statusItem = STATUS.map((item, index) => ({
    id: `status-${index}`,
    title: item,
  }));
  return (
    <div>
      <FilterGroup title={"Статус"} items={statusItem} />
    </div>
  );
}

export default Status;
