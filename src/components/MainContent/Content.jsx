import { useEffect, useState } from "react";
import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./content.module.css";

import Error from "../Error/index.jsx";

function Content({ searchValue }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const closeError = () => {
    setError(null);
  };

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.yeatwork.ru/questions/public-questions?page=1&limit=10${search}`,
        );

        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }

        const data = await res.json();
        setQuestions(data.data);
      } catch (err) {
        setError(err.message);
        console.error("Ошибка:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <>
      {error && <Error closeError={closeError} error={error} />}

      <div className={styles.questions__container}>
        <div className={styles.wrapper}>
          <div className={styles.questions__list}>
            <div className={styles.title__text}>
              <h1>Вопросы React, JavaScript</h1>
            </div>

            {loading ? (
              <div className={styles.loading}>Загрузка вопросов...</div>
            ) : (
              <>
                {questions.filter((obj) =>
                  obj.title.toLowerCase().includes(searchValue.toLowerCase()),
                ).length === 0 ? (
                  <div className={styles.notFound}>Ничего не найдено</div>
                ) : (
                  questions
                    .filter((obj) =>
                      obj.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()),
                    )
                    .map((question) => (
                      <QuestionItem
                        key={question.id}
                        question={question}
                        img={false}
                      />
                    ))
                )}
              </>
            )}
          </div>

          <div className={styles.pagination}>
            <h1 className={styles.textPag}>Тут будет пагинация</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
