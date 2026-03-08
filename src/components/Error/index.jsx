import styles from "./error.module.css";

function Error({ closeError, error }) {
  return (
    <div className={styles.errorOverlay}>
      <div className={styles.errorModal}>
        <button className={styles.closeBtn} onClick={closeError}>
          ×
        </button>
        <h3>Произошла ошибка</h3>
        <p>{error}</p>
        <button
          className={styles.retryBtn}
          onClick={() => window.location.reload()}
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}

export default Error;
