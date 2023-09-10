import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

import { Exact, Scalars } from './types';
const defaultOptions = {};

export const UserWalletIdDocument = gql`
  query UserWallet($where: UserWalletWhereUniqueInput!) {
    userWallet(where: $where) {
      id
    }
  }
`;

export type UserWalletWhereUniqueInput = {
  walletAddress: Scalars['String'];
};

export type GetUserWalletId = {
  userWallet: {
    // __typename: 'OrdersResponse';
    id: Scalars['Int'];
  };
};

export type GetUserWalletIdVariables = Exact<{
  where: Exact<UserWalletWhereUniqueInput>;
}>;

export function useGetUserWalletId(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserWalletId, GetUserWalletIdVariables>,
) {
  const walletAddress = baseOptions?.variables?.where.walletAddress;
  const options = {
    ...defaultOptions,
    ...baseOptions,
    ...{ skip: walletAddress === undefined || walletAddress === 'null' },
  };

  return ApolloReactHooks.useQuery<GetUserWalletId, GetUserWalletIdVariables>(UserWalletIdDocument, options);
}

export type GetUserWalletIdHookResult = ReturnType<typeof useGetUserWalletId>;
export type GetUserWalletIdQueryResult = Apollo.QueryResult<GetUserWalletId, GetUserWalletIdVariables>;
