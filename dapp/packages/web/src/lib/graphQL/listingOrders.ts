import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

import {
  Exact,
  InputMaybe,
  IntFilter,
  ListingOrder,
  OrderStatus,
  Scalars,
  SortOrder,
  StringFilter,
} from './types';
const defaultOptions = {};

export const ListingOrdersDocument = gql`
  query Orders($where: OrderWhereInput, $take: Int, $skip: Int, $orderBy: [OrderOrderByWithRelationInput!]) {
    orders(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
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
          tokenId
          name
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

export type GetListingOrdersQuery = {
  orders: {
    __typename: 'OrdersResponse';
    count: Scalars['Int'];
    items: ListingOrder[];
  };
};

export type EnumOrderStatusFilter = {
  equals: OrderStatus;
};

export type NftRelationFilter = {
  is: NftWhereInput;
};

export type OrderOrderByWithRelationInput = {
  createdAt: SortOrder;
};

export type NftWhereInput = {
  AND?: InputMaybe<Array<NftWhereInput>>;
  OR?: InputMaybe<Array<NftWhereInput>>;
  NOT?: InputMaybe<Array<NftWhereInput>>;
  weaponMetadata?: InputMaybe<WeaponMetadataRelationFilter>;
  characterMetadata?: InputMaybe<CharacterMetadataRelationFilter>;
};

export type WeaponMetadataRelationFilter = {
  is: WeaponMetadataWhereInput;
};

export type CharacterMetadataRelationFilter = {
  is: CharacterMetadataWhereInput;
};

export type WeaponMetadataWhereInput = {
  AND?: InputMaybe<Array<WeaponMetadataWhereInput>>;
  OR?: InputMaybe<Array<WeaponMetadataWhereInput>>;
  NOT?: InputMaybe<Array<WeaponMetadataWhereInput>>;
  gunType?: InputMaybe<StringFilter>;
  gunLevel?: InputMaybe<IntFilter>;
  gunRarity?: InputMaybe<StringFilter>;
};

export type CharacterMetadataWhereInput = {
  AND?: InputMaybe<Array<CharacterMetadataWhereInput>>;
  OR?: InputMaybe<Array<CharacterMetadataWhereInput>>;
  NOT?: InputMaybe<Array<CharacterMetadataWhereInput>>;
  heroClass?: InputMaybe<StringFilter>;
  heroRarity?: InputMaybe<StringFilter>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  status?: EnumOrderStatusFilter;
  nft?: InputMaybe<NftRelationFilter>;
  sellPrice?: SellPriceRange;
  expiredAt?: DateTimeFilter;
};

export type DateTimeFilter = {
  gte: string;
};

export type SellPriceRange = {
  lte: string;
  gte: string;
};

export type GetListingOrdersVariables = Exact<{
  where: InputMaybe<OrderWhereInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: OrderOrderByWithRelationInput;
}>;

export function useGetListingOrders(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetListingOrdersQuery, GetListingOrdersVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetListingOrdersQuery, GetListingOrdersVariables>(
    ListingOrdersDocument,
    options,
  );
}

export type ListingOrdersHookResult = ReturnType<typeof useGetListingOrders>;
export type ListingOrdersQueryResult = Apollo.QueryResult<GetListingOrdersQuery, GetListingOrdersVariables>;
