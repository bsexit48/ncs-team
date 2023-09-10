import {
  GetTransactionHistoryQueryResult,
  OrderOrderByWithRelationInput,
  OrderWhereInput,
  useGetTransactionHistory,
} from 'lib/graphQL/transactionHistory';
import { Scalars, Transaction } from 'lib/graphQL/types';

export interface useTransactionHistoryParams {
  where: OrderWhereInput;
  take: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: OrderOrderByWithRelationInput[];
}

export interface IQueryTransaction extends GetTransactionHistoryQueryResult {
  items: Transaction[];
  count: number | undefined;
}

export function useTransactionHistory({
  where,
  take,
  skip,
  orderBy,
}: useTransactionHistoryParams): IQueryTransaction {
  const res = useGetTransactionHistory({
    variables: {
      where,
      take,
      skip,
      orderBy,
    },
  });

  return {
    items: res.data?.orders.items || [],
    count: res.data?.orders.count,
    ...res,
  };
}
