import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [valueDebounce, setValueDebounce] = useState(value);

  useEffect(() => {
    const handleTime = setTimeout(() => {
      setValueDebounce(value);
    }, delay);

    return () => {
      clearTimeout(handleTime);
    };
  }, [value, delay]);

  return valueDebounce;
};
