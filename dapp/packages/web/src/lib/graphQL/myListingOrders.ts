import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

import { Exact, ListingOrder, Maybe, OrderStatus, Scalars, SortOrder } from './types';
const defaultOptions = {};

export const MyListingOrdersDocument = gql`
  query Orders($where: OrderWhereInput, $orderBy: [OrderOrderByWithRelationInput!], $take: Int, $skip: Int) {
    orders(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      count
      items {
        nft {
          weaponMetadata {
            gunStar
            gunRarity
          }
          characterMetadata {
            heroRarity
          }
          pluginMetadata {
            pluginStar
          }
          id
          name
          tokenId
          nftType
          imageUrl
        }
        sellPrice
        nftId
        id
      }
    }
  }
`;

export type OrderWhereInput = {
  status: {
    equals: OrderStatus;
  };
  sellUserWallet: {
    is: {
      id: {
        equals: Maybe<Scalars['Int']>;
      };
    };
  };
};

export type GetMyListingOrders = {
  orders: {
    __typename: 'OrdersResponse';
    count: Scalars['Int'];
    items: ListingOrder[];
  };
};

export type OrderOrderByWithRelationInput = {
  createdAt: SortOrder;
};

export type GetMyListingOrdersVariables = Exact<{
  where: Exact<OrderWhereInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: OrderOrderByWithRelationInput;
}>;

export function useGetMyListingOrders(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetMyListingOrders, GetMyListingOrdersVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetMyListingOrders, GetMyListingOrdersVariables>(
    MyListingOrdersDocument,
    options,
  );
}

export type GetMyListingOrdersHookResult = ReturnType<typeof useGetMyListingOrders>;
export type GetMyListingOrdersQueryResult = Apollo.QueryResult<
  GetMyListingOrders,
  GetMyListingOrdersVariables
>;
