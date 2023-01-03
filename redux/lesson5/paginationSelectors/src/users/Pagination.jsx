import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = () => {
    if (currentPage === 1) {
      return true;
    }
    return false;
  };

  const isNextPageAvailable = () => {
    if (itemsPerPage !== 3 || totalItems === 3) {
      return true;
    }
    return false;
  };

  return (
    <div className="pagination">
      <button disabled={isPrevPageAvailable()} className="btn" onClick={goPrev}>
        {isPrevPageAvailable() === false ? '←' : null}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={isNextPageAvailable()} className="btn" onClick={goNext}>
        {isNextPageAvailable() === false ? '→' : null}
      </button>
    </div>
  );
};

export default Pagination;
