import styles from "../_styles/Pagination.module.scss";
const Pagination = ({
  totalFoundations,
  foundationsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [
    ...Array(Math.ceil(totalFoundations / foundationsPerPage)).keys(),
  ].map((num) => num + 1);
  return (
    <div className={styles.paginationBox}>
      {pages.map((page) => {
        return (
          <button
            className={currentPage === page ? styles.active : ""}
            key={page}
            onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
