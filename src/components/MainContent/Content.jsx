import { useEffect, useState } from "react";
import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./content.module.css";
import Error from "../ErrorModale/index.jsx";
import Pagination from "../Pagination/index.jsx";

function Content({ searchValue }) {
  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPage = 10;

  const closeError = () => {
    setError(null);
  };

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.yeatwork.ru/questions/public-questions?page=1&limit=1000`,
        );

        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const data = await res.json();
        setAllQuestions(data.data);
      } catch (err) {
        setError(err.message);
        console.error("Ошибка:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  const filteredQuestions = allQuestions.filter((q) =>
    q.title.toLowerCase().includes(searchValue.toLowerCase()),
  );
  const startPage = (currentPage - 1) * itemPage;
  const paginationQuestions = filteredQuestions.slice(
    startPage,
    startPage + itemPage,
  );
  const totalPages = Math.ceil(filteredQuestions.length / itemPage);
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

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
              paginationQuestions.map((question) => (
                <QuestionItem
                  key={question.id}
                  question={question}
                  img={false}
                />
              ))
            )}
          </div>
          {!loading && filteredQuestions.length === 0 && (
            <div>По запросу '{searchValue}' ничего не найдено!</div>
          )}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <Pagination onPageChange={(num) => setCurrentPage(num)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Content;
