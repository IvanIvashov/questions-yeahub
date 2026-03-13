import FilterGroup from "../FilterGroup/FilterGroup";

function FilterSection({ title, itemsArr, baseId }) {
  const items = itemsArr.map((item, index) => ({
    id: `${baseId}-${index}`,
    title: item,
  }));
  return (
    <div>
      <FilterGroup title={title} items={items} />
    </div>
  );
}

export default FilterSection;
