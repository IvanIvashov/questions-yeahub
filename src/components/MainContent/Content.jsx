import { useEffect, useState } from "react";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./content.module.css";
import Error from "../ErrorModale/index.jsx";
import Pagination from "../Pagination/index.jsx";

function Content({ searchValue }) {
  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemPage = 10;
  const debouncedSearch = useDebounce(searchValue, 800);

  const closeError = () => {
    setError(null);
  };

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      setError(null);
      try {
        const searchParam = debouncedSearch
          ? `&titleOrDescription=${encodeURIComponent(debouncedSearch)}`
          : "";
        const url = `https://api.yeatwork.ru/questions/public-questions?page=${currentPage}&limit=${itemPage}${searchParam}`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const data = await res.json();
        console.log(data.data);

        setAllQuestions(data.data);
        setTotalPages(Math.ceil(data.total / itemPage));
      } catch (err) {
        setError(err.message);
        console.error("Ошибка:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [currentPage, debouncedSearch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
              allQuestions.map((question) => (
                <QuestionItem
                  key={question.id}
                  question={question}
                  img={false}
                />
              ))
            )}
          </div>
          {!loading && allQuestions.length === 0 && (
            <div>По запросу '{searchValue}' ничего не найдено!</div>
          )}

          <div className={styles.pagination}>
            <Pagination
              onPageChange={handlePageChange}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
