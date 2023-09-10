import * as React from 'react';
import ReactPaginate from 'react-paginate';

import { NextArrow, PrevArrow } from '../Arrows';

interface ICustomPaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  gotoPage: (i: number) => void;
}

const CustomPagination: React.FunctionComponent<ICustomPaginationProps> = ({
  pageSize,
  currentPage,
  totalItems,
  gotoPage,
}) => {
  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    gotoPage(event.selected);
  };

  return (
    <div className="ultimate_player-pagination">
      <ReactPaginate
        nextLabel={<NextArrow />}
        onPageChange={handlePageClick}
        pageCount={Math.ceil(totalItems / pageSize)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        previousLabel={<PrevArrow />}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default CustomPagination;
