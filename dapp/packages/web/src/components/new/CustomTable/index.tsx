import * as React from 'react';
import ReactPaginate from 'react-paginate';
import { usePagination, useTable } from 'react-table';
import { get, isObject, omit } from 'lodash';

import { TransactionStatus } from 'lib/graphQL/types';
import { useTransactionHistoryParams } from 'lib/hooks/useTransactionHistory';

import { NextArrow, PrevArrow } from '../Arrows';

interface ICustomTableProps {
  columns: any;
  data: any;
  fetchData: (params: any) => void;
  loading: boolean;
  controlledPageCount: number;
}

const CustomTable: React.FunctionComponent<ICustomTableProps> = (props) => {
  const { columns, data, fetchData, loading, controlledPageCount } = props;
  const {
    headerGroups,
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination,
  );

  React.useEffect(() => {
    fetchData({ pageIndex });
  }, [fetchData, pageIndex]);

  return (
    <React.Fragment>
      {controlledPageCount !== 0 && (
        <React.Fragment>
          <div style={{ overflowX: 'auto' }}>
            <table {...getTableProps()} className="custom-table">
              <thead>
                {headerGroups.map((headerGroup, i) => {
                  return (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                      {headerGroup.headers.map((column: any, j) => {
                        return (
                          <th {...column.getHeaderProps()} key={j + 300}>
                            <div className="py-1">
                              {column.render('Header')}
                              {column.filterComponent ? column.filterComponent : null}
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={i + 100}>
                      {row.cells.map((cell, j) => {
                        if (isObject(cell.value)) {
                          return (
                            <td {...cell.getCellProps()} key={j + 200}>
                              <div>
                                <p className="table-ultimate_player__price">
                                  {get(cell.value, 'price', 0)} ultimate_player
                                </p>
                                <p className="table-ultimate_player__date">{get(cell.value, 'date', '')}</p>
                              </div>
                            </td>
                          );
                        } else {
                          return (
                            <td
                              {...cell.getCellProps()}
                              key={j}
                              className={`${
                                cell.value === TransactionStatus.CONFIRMED
                                  ? 'green'
                                  : cell.value === TransactionStatus.PENDING
                                  ? 'yellow'
                                    ? cell.value === TransactionStatus.FAILED
                                    : 'red'
                                  : 'white'
                              }`}
                            >
                              {cell.render('Cell')}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {controlledPageCount > 1 && (
            <PaginatedTable data={data} controlledPageCount={controlledPageCount} gotoPage={gotoPage} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

interface IPaginatedTable {
  pageSize?: number;
  controlledPageCount: number;
  data: any;
  gotoPage: (i: number) => void;
}

const PaginatedTable: React.FunctionComponent<IPaginatedTable> = ({
  pageSize = 7,
  controlledPageCount,
  data,
  gotoPage,
}: IPaginatedTable) => {
  const [itemOffset, setItemOffset] = React.useState(0);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    gotoPage(event.selected);
    const newOffset = (event.selected * pageSize) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="ultimate_player-pagination">
      <ReactPaginate
        nextLabel={<NextArrow />}
        onPageChange={handlePageClick}
        pageCount={controlledPageCount}
        pageRangeDisplayed={3}
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

interface IFilterStatusProps {
  variables: useTransactionHistoryParams | undefined;
  refetch: (variables: useTransactionHistoryParams) => void;
}

interface ITransactionStatus {
  id: number;
  value: TransactionStatus | 'All';
}

const FilterStatus: React.FunctionComponent<IFilterStatusProps> = (props) => {
  const { variables, refetch } = props;
  const listTransactionStatus: ITransactionStatus[] = [
    { id: 0, value: 'All' },
    { id: 1, value: TransactionStatus.CONFIRMED },
    { id: 2, value: TransactionStatus.PENDING },
    { id: 3, value: TransactionStatus.FAILED },
  ];
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('All');

  const refDropdown = React.useRef(null as any);

  const toggleDropdownVisible = (value: boolean) => {
    setDropdownVisible(value);
  };

  React.useEffect(() => {
    const clickOutSide = (event: any) => {
      if (refDropdown.current && !refDropdown.current.contains(event.target) && isDropdownVisible) {
        toggleDropdownVisible(false);
      }
    };
    window.addEventListener('click', clickOutSide);
    return () => {
      window.removeEventListener('click', clickOutSide);
    };
  }, [refDropdown, isDropdownVisible]);
  const onClickItem = (value: TransactionStatus | 'All') => {
    setSelectedOption(value);
    if (!variables) return;
    let newWhere;
    if (value === 'All') {
      newWhere = omit(variables.where, ['sellTransaction']);
    } else {
      newWhere = {
        ...variables.where,
        sellTransaction: {
          is: {
            status: {
              in: [value],
            },
          },
        },
      };
    }
    const newVariables = { ...variables, where: newWhere };
    refetch(newVariables);
    toggleDropdownVisible(false);
  };

  return (
    <div className="table-filter">
      <i
        className="fa fa-filter color-linear-yellow-orange"
        aria-hidden="true"
        onClick={() => toggleDropdownVisible(!isDropdownVisible)}
      ></i>
      <div
        ref={(elm) => (refDropdown.current = elm)}
        className={`table-filter__dropdown ${isDropdownVisible ? 'show' : 'hide'}`}
      >
        {listTransactionStatus.map((item) => {
          return (
            <div
              className={`dropdown-item ${item.value.toLowerCase()}
                ${selectedOption === item.value ? 'actived' : ''}`}
              key={item.id}
              onClick={() => onClickItem(item.value)}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { FilterStatus };
export default CustomTable;
