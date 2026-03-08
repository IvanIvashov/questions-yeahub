import { useState } from "react";
import styles from "./questionItem.module.css";

import circle from "../QuestionItem/img/circle.svg";
import arrowDown from "../QuestionItem/img/arrowDown.svg";
import close from "../QuestionItem/img/close.svg";
import answerImg from "../QuestionItem/img/answerImg.jpg";

function QuestionItem({ question, img }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={styles.question__accordion}>
      <div className={styles.question__title} onClick={handleClick}>
        <h2>
          <img src={circle} alt="circle" />
          {question.title}
        </h2>
        <button className={styles.accordion__btn}>
          <img
            className={`${styles.show__btn} ${isOpen ? styles.rotated : ""}`}
            src={arrowDown}
            alt="arrow"
          />
        </button>
      </div>
      {isOpen && (
        <div className={styles.answer__question}>
          <div className={styles.question__info}>
            <div className={styles.info__left}>
              <p>
                Рейтинг: <span>{question.rate}</span>
              </p>
              <p>
                Сложность: <span>{question.complexity}</span>
              </p>
            </div>
            <button className={styles.edit__btn}>
              <img className={styles.edit__btn} src={close} alt="edit-btn" />
            </button>
          </div>

          <div className={styles.example}>
            {img && (
              <img
                className={styles.example__img}
                src={question.imageSrc}
                alt="example"
              />
            )}

            <p className={styles.desc}>
              {question.longAnswer ||
                question.description ||
                "Описание отсутствует"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionItem;
