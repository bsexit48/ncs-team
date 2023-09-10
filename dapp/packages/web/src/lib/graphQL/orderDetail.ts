import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

import { Exact, ListingOrder, Scalars } from './types';
const defaultOptions = {};

export const OrderDetailDocument = gql`
  query Order($where: OrderWhereUniqueInput!) {
    order(where: $where) {
      sellPrice
      nft {
        nftType
        tokenId
        nftAddress
        name
        description
        imageUrl
        thumbnailUrl
        weaponMetadata {
          gunType
          gunRarity
          gunStar
          gunLevel
          gunAttack
          gunDamage
          bulletRange
          gunReloadTime
          gunMagazine
          gunfireShootSpeed
          gunChargeDelay
          repeatBulletNumber
          rayWidth
          explosionDamageRanger
          singleFireBulletNumber
          numberOfLaserLink
          frameWidth
          aimingTime
          elementalDamage
          tokenType
        }
        characterMetadata {
          heroClass
          heroRarity
          attack
          hp
          defense
          criticalRate
          criticalDamage
          shotSpeed
          moveSpeed
        }
        gemMetadata {
          gemType
          gemRarity
          primaryAttributes
          secondaryAttributes
          tokenType
        }
        pluginMetadata {
          pluginType
          pluginStar
          primaryAttributes
          tokenType
        }
      }
    }
  }
`;

export type OrderDetailQuery = {
  order: ListingOrder;
};

export type OrderWhereUniqueInput = {
  id: number;
};

export type OrderDetailVariables = Exact<{
  where: Exact<OrderWhereUniqueInput>;
}>;

export function useGetOrderDetail(
  baseOptions?: ApolloReactHooks.QueryHookOptions<any, OrderDetailVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<OrderDetailQuery, OrderDetailVariables>(OrderDetailDocument, options);
}

export type ListingOrdersHookResult = ReturnType<typeof useGetOrderDetail>;
export type ListingOrdersQueryResult = Apollo.QueryResult<OrderDetailQuery, OrderDetailVariables>;
