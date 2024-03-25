const Pagination = ({ currentPage, totalPages, limit, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <>
      <div class="row">
        <div class="col-sm-12 col-custom">
          <div class="toolbar-bottom">
            <div className="pagination">
              <ul>
                {currentPage !== 1 && (
                  <li className={currentPage === 1 ? "disabled" : ""}>
                    <span
                      onClick={() => handlePageClick(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </span>
                  </li>
                )}

                {Array.from(
                  { length: Math.min(totalPages, 5) },
                  (_, i) => i + 1
                ).map((page) => (
                  <li
                    key={page}
                    className={currentPage === page ? "current" : ""}
                  >
                    <span onClick={() => handlePageClick(page)}>{page}</span>
                  </li>
                ))}
                {totalPages > 5 && currentPage < totalPages - limit && (
                  <li>...</li>
                )}

                {currentPage !== totalPages && (
                  <li className={currentPage === totalPages ? "disabled" : ""}>
                    <span
                      onClick={() => handlePageClick(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <p className="desc-content text-center text-sm-right mb-0">
              Showing {(currentPage - 1) * limit + 1} -{" "}
              {Math.min(currentPage * limit, totalPages * limit)} of{" "}
              {totalPages * limit} results
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pagination;
