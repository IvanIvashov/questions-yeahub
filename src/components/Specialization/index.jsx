import { useEffect, useState } from "react";
import FilterGroup from "../FilterGroup/FilterGroup";

function Specializations() {
  const [getSpecializations, setGetSpecializations] = useState([]);

  useEffect(() => {
    async function fetchSpecializations() {
      try {
        const res = await fetch(
          "https://api.yeatwork.ru/specializations?page=1&limit=10",
        );
        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setGetSpecializations(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSpecializations();
  }, []);

  return <FilterGroup title={"Специализация"} items={getSpecializations} />;
}

export default Specializations;
