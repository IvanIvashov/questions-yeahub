import styles from "./categoryblock.module.css";

function CategoryBlock({ title, arr, icon, showAll }) {
  return (
    <div className={styles.category}>
      <p className={styles.title__text}>{title}</p>
      <ul className={styles.category__list}>
        {arr.map((title, index) => (
          <li key={index} className={styles.category__item}>
            <button className={styles.btn__item}>
              {icon && (
                <img className={styles.btn__icon} src={icon} alt="иконка" />
              )}
              {title}
            </button>
          </li>
        ))}
      </ul>
      {showAll && (
        <a className={styles.link} href="#">
          Посмотреть все
        </a>
      )}
    </div>
  );
}

export default CategoryBlock;
