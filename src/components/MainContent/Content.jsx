import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./content.module.css";

function Content() {
  return (
    <div className={styles.questions__container}>
      <div className={styles.wrapper}>
        <div className={styles.questions__list}>
          <div className={styles.title__text}>
            <h1>Вопросы React, JavaScript</h1>
          </div>
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
        </div>
        <div className={styles.pagination}>
          <h1 className={styles.textPag}>Тут будет пагинация</h1>
        </div>
      </div>
    </div>
  );
}

export default Content;
