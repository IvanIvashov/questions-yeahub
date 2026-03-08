import { useState } from "react";
import styles from "./filterGroup.module.css";

function FilterGroup({ title, items }) {
  const [showAll, setShowAll] = useState(false);

  if (!items || items.length === 0) {
    return (
      <div className={styles.category}>
        <p className={styles.title__text}>{title}</p>
        <div className={styles.loading}>Загрузка...</div>
      </div>
    );
  }

  const visibleItems = showAll ? items : items.slice(0, 5);
  return (
    <div className={styles.category}>
      <p className={styles.title__text}>{title}</p>
      <ul className={styles.category__list}>
        {visibleItems.map((item) => (
          <li key={item.id} className={styles.category__item}>
            <button className={styles.btn__item}>
              {item.imageSrc && (
                <img
                  className={styles.btn__icon}
                  src={item.imageSrc}
                  alt=""
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      {items.length > 5 && (
        <button className={styles.link} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Свернуть" : "Посмотреть все"}
        </button>
      )}
    </div>
  );
}

export default FilterGroup;
