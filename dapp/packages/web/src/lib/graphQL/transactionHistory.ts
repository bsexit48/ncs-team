import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

import { Exact, Scalars, SortOrder, Transaction, TransactionStatus } from './types';
const defaultOptions = {};

export const TransactionHistoryDocument = gql`
  query Orders($where: OrderWhereInput, $orderBy: [OrderOrderByWithRelationInput!], $take: Int, $skip: Int) {
    orders(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
      items {
        sellPrice
        sellUserWallet {
          walletAddress
        }
        startedAt
        sellTransaction {
          txHash
          status
        }
      }
      count
    }
  }
`;

export type OrderWhereInput = {
  nftId: {
    equals: Scalars['Int'];
  };
  sellTransaction?: {
    is: {
      status: {
        in: Array<TransactionStatus>;
      };
    };
  };
};

export type OrderOrderByWithRelationInput = {
  startedAt?: SortOrder;
};

export type GetTransactionHistory = {
  orders: {
    __typename: 'OrdersResponse';
    count: Scalars['Int'];
    items: Transaction[];
  };
};

export type GetTransactionHistoryVariables = Exact<{
  where: Exact<OrderWhereInput>;
  orderBy: OrderOrderByWithRelationInput[];
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export function useGetTransactionHistory(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTransactionHistory, GetTransactionHistoryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetTransactionHistory, GetTransactionHistoryVariables>(
    TransactionHistoryDocument,
    options,
  );
}

export type GetTransactionHistoryHookResult = ReturnType<typeof useGetTransactionHistory>;
export type GetTransactionHistoryQueryResult = Apollo.QueryResult<
  GetTransactionHistory,
  GetTransactionHistoryVariables
>;
