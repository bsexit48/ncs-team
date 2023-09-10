import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

import { Exact, Maybe, Nft, OrderStatus, Scalars, SortOrder } from './types';
const defaultOptions = {};

export const MyInventoryDocument = gql`
  query Nfts($orderBy: [NftOrderByWithRelationInput!], $take: Int, $skip: Int, $where: NftWhereInput) {
    nfts(orderBy: $orderBy, take: $take, skip: $skip, where: $where) {
      count
      items {
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
    }
  }
`;

export type EnumOrderStatusFilter = {
  equals: OrderStatus;
};

export type NftOrderByWithRelationInput = {
  createdAt: SortOrder;
};

export type NftWhereInput = {
  ownerWalletId: {
    equals: Maybe<Scalars['Int']>;
  };
};

export type GetInventory = {
  nfts: {
    __typename: 'NftsResponse';
    count: Scalars['Int'];
    items: Nft[];
  };
};

export type GetInventoryVariables = Exact<{
  where: Exact<NftWhereInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: NftOrderByWithRelationInput;
}>;

export function useInventory(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetInventory, GetInventoryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return ApolloReactHooks.useQuery<GetInventory, GetInventoryVariables>(MyInventoryDocument, options);
}

export type GetInventoryHookResult = ReturnType<typeof useInventory>;
export type GetInventoryQueryResult = Apollo.QueryResult<GetInventory, GetInventoryVariables>;
