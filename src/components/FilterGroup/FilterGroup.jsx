import styles from "./filterGroup.module.css";

function FilterGroup({ title, items }) {
  if (!items || items.length === 0) {
    return (
      <div className={styles.category}>
        <p className={styles.title__text}>{title}</p>
        <div className={styles.loading}>Загрузка...</div>
      </div>
    );
  }

  return (
    <div className={styles.category}>
      <p className={styles.title__text}>{title}</p>
      <ul className={styles.category__list}>
        {items.map((item) => (
          <li key={item.id} className={styles.category__item}>
            <button className={styles.btn__item}>
              {item.imageSrc && (
                <img className={styles.btn__icon} src={item.imageSrc} alt="" />
              )}
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <a className={styles.link} href="#">
        Посмотреть все
      </a>
    </div>
  );
}

export default FilterGroup;
