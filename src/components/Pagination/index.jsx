import ReactPaginate from "react-paginate";
import styles from "./pagination.module.css";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";

function Pagination({ onPageChange, currentPage, totalPages }) {
  return (
    <ReactPaginate
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousClassName={styles.prevItem}
      previousLinkClassName={styles.prevLink}
      nextClassName={styles.nextItem}
      nextLinkClassName={styles.nextLink}
      breakClassName={styles.breakItem}
      breakLinkClassName={styles.breakLink}
      activeClassName={styles.selected}
      breakLabel={
        <svg
          width="8"
          height="2"
          viewBox="0 0 8 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1" cy="1" r="1" fill="#474747" />
          <circle cx="4" cy="1" r="1" fill="#474747" />
          <circle cx="7" cy="1" r="1" fill="#474747" />
        </svg>
      }
      nextLabel={<ArrowRight />}
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      forcePage={currentPage - 1}
      previousLabel={<ArrowLeft />}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
