const Paginations = ({
  itemsPerPage,
  totalItems,
  onPageChange,
  currentPage,
}) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <span className="page-link">이전</span>
      </button>
      <button
        disabled={currentPage === pageNumbers}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <span className="page-link">다음</span>
      </button>
    </div>
  );
};

export default Paginations;
