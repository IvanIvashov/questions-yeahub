import { useEffect, useState } from "react";
import styles from "./questionList.module.css";

import circle from "../QuestionList/img/circle.svg";
import arrowDown from "../QuestionList/img/arrowDown.svg";
import close from "../QuestionList/img/close.svg";
import answerImg from "../QuestionList/img/answerImg.jpg";

function QuestionList() {
  const [isOpen, setIsOpen] = useState(false);
  const [getQuestions, setGetQuestions] = useState([]);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://api.yeatwork.ru/questions/public-questions?page=1&limit=10",
        );
        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const data = await res.json();
        setGetQuestions(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className={styles.question__accordion}>
      <div className={styles.question__title} onClick={handleClick}>
        <h2>
          <img src={circle} alt="circle" />
          Что такое Virtual DOM и как он работает?
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
                Рейтинг: <span>4</span>
              </p>
              <p>
                Сложность: <span>10</span>
              </p>
            </div>
            <button className={styles.edit__btn}>
              <img className={styles.edit__btn} src={close} alt="edit-btn" />
            </button>
          </div>

          <div className={styles.example}>
            <img
              className={styles.example__img}
              src={answerImg}
              alt="example"
            />
            <p className={styles.desc}>
              Virtual DOM (виртуальный DOM) — это программная концепция,
              используемая в разработке веб-приложений для повышения
              эффективности обновлений интерфейса. Это представление реального
              DOM (структуры документа, отображаемого в браузере) в памяти,
              которое позволяет оптимизировать изменения, минимизируя
              взаимодействие с реальным DOM, что ускоряет рендеринг и обновление
              страниц. При изменении данных приложения Virtual DOM сравнивает
              новое состояние с предыдущим и обновляет только те части реального
              DOM, которые изменились, вместо перерисовки всего документа.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionList;
