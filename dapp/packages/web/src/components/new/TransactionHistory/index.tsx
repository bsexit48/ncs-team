import * as React from 'react';
import dayjs from 'dayjs';
import mobile from 'is-mobile';
import { formatAmountToken, shortenAddress, shortenTxHash } from 'utils';

import { IQueryTransaction } from 'lib/hooks/useTransactionHistory';

import CustomTable, { FilterStatus } from '../CustomTable';

interface ITransactionHistoryProps {
  transactionData: IQueryTransaction;
  maxRow: number;
}

const TransactionHistory: React.FunctionComponent<ITransactionHistoryProps> = (props) => {
  const { transactionData, maxRow } = props;
  const { loading, items, count, refetch, variables } = transactionData;

  const data = React.useMemo(() => {
    return items.map((item) => {
      return {
        seller: shortenAddress(item.sellUserWallet.walletAddress),
        tx: shortenTxHash(item.sellTransaction.txHash, 2),
        status: item.sellTransaction.status,
        price: formatAmountToken(item.sellPrice),
        date: dayjs(item.startedAt).format('HH:mm:ss DD/MM/YYYY'),
      };
    });
  }, [items]);

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'Seller',
        accessor: 'seller', // accessor is the "key" in the data
        disableFilters: true,
      },
      {
        Header: 'TX',
        accessor: 'tx',
        disableFilters: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        // filterComponent: <FilterStatus variables={variables} refetch={refetch} />,
      },
      {
        Header: 'Price',
        accessor: 'price',
        disableFilters: true,
      },
      {
        Header: 'Date',
        accessor: 'date',
        disableFilters: true,
      },
    ],
    [],
  );

  const columnsMobile: any = React.useMemo(
    () => [
      {
        Header: 'Seller',
        accessor: 'seller', // accessor is the "key" in the data
        disableFilters: true,
      },
      {
        Header: 'TX',
        accessor: 'tx',
        disableFilters: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        filterComponent: <FilterStatus variables={variables} refetch={refetch} />,
      },
    ],
    [],
  );

  const fetchMoreData = React.useCallback(
    ({ pageIndex }) => {
      const newVariables = { ...variables, ...{ skip: pageIndex } };
      refetch(newVariables);
    },
    // eslint-disable-next-line
    [],
  );

  return (
    <div className="mt-2 transaction-history">
      <div className="transaction-history__content">
        <CustomTable
          columns={mobile() ? columnsMobile : columns}
          data={data}
          fetchData={fetchMoreData}
          loading={loading}
          controlledPageCount={Math.ceil(count || 0 / maxRow)}
        />
      </div>
      {/* <div className='overlay'></div> */}
    </div>
  );
};

export default TransactionHistory;
