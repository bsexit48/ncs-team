import * as React from 'react';
import dayjs from 'dayjs';
import mobile from 'is-mobile';
import { formatAmountToken, shortenAddress, shortenTxHash } from 'utils';

import { SortOrder } from 'lib/graphQL/types';
import { useTransactionHistory } from 'lib/hooks/useTransactionHistory';

import CustomTable, { FilterStatus } from '../CustomTable';

interface ITransactionHistoryProps {
  nftId: number;
}

const PAGE_SIZE = 7;
const TransactionHistory: React.FunctionComponent<ITransactionHistoryProps> = (props) => {
  const { nftId } = props;
  const defaultParams = {
    where: {
      nftId: { equals: nftId },
    },
    orderBy: [{ startedAt: SortOrder.asc }],
    take: PAGE_SIZE,
    skip: 0,
  };
  const { loading, items, count, refetch, variables } = useTransactionHistory(defaultParams);

  const data = React.useMemo(() => {
    return items.map((item) => {
      return {
        seller: shortenAddress(item.sellUserWallet.walletAddress),
        tx: shortenTxHash(item.sellTransaction.txHash),
        status: item.sellTransaction.status,
        'price-date': {
          price: formatAmountToken(item.sellPrice),
          date: dayjs(item.startedAt).format('DD/MM/YYYY HH:mm'),
        },
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
        Header: 'Tx',
        accessor: 'tx',
        disableFilters: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        filterComponent: <FilterStatus variables={variables} refetch={refetch} />,
      },
      {
        Header: 'Price',
        accessor: 'price-date',
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
        Header: 'Tx',
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
      <h2 className="transaction-history__title">Transactions History</h2>
      <div className="transaction-history__content">
        <CustomTable
          columns={mobile() ? columnsMobile : columns}
          data={data}
          fetchData={fetchMoreData}
          loading={loading}
          controlledPageCount={Math.ceil(count || 0 / PAGE_SIZE)}
        />
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default TransactionHistory;
