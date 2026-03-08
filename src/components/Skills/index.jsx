import { useEffect, useState } from "react";
import FilterGroup from "../FilterGroup/FilterGroup";

function Skills() {
  const [getSkills, setGetSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch(
          "https://api.yeatwork.ru/skills?page=1&limit=5",
        );
        console.log(res);
        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const data = await res.json();
        setGetSkills(data.data);
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSkills();
  }, []);
  return (
    <div>
      <FilterGroup title={"Навыки"} items={getSkills} />
    </div>
  );
}

export default Skills;
