import { useEffect, useState } from "react";
import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./content.module.css";
import Error from "../Error/index.jsx";
import Pagination from "../Pagination/index.jsx";

function Content({ searchValue }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const closeError = () => {
    setError(null);
  };

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.yeatwork.ru/questions/public-questions?page=${currentPage}&limit=10$`,
        );

        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }

        const data = await res.json();
        console.log("Ответ от API:", data);
        setQuestions(data.data);
      } catch (err) {
        setError(err.message);
        console.error("Ошибка:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [currentPage]);

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
              questions
                .filter((obj) =>
                  obj.title.toLowerCase().includes(searchValue.toLowerCase()),
                )
                .map((question) => (
                  <QuestionItem
                    key={question.id}
                    question={question}
                    img={false}
                  />
                ))
            )}
          </div>

          <div className={styles.pagination}>
            <Pagination onPageChange={(num) => setCurrentPage(num)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
