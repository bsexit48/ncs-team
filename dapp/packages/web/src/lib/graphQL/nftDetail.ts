import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

import { Exact, InputMaybe, Nft, Scalars } from './types';
const defaultOptions = {};

export const NftDetailDocument = gql`
  query NftDetail($where: NftWhereUniqueInput!) {
    nft(where: $where) {
      id
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
`;

export type NftDetailQuery = {
  nft: Nft;
};

export type NftWhereUniqueInput = {
  id?: Scalars['Int'];
  unique_nft_address_token_id?: NftUnique_nft_address_token_idCompoundUniqueInput;
};

export type NftUnique_nft_address_token_idCompoundUniqueInput = {
  nftAddress: Scalars['String'];
  tokenId: Scalars['Int'];
};

export type NftDetailVariables = Exact<{
  where?: InputMaybe<NftWhereUniqueInput>;
}>;

export function useGetNftDetail(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NftDetailQuery, NftDetailVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<NftDetailQuery, NftDetailVariables>(NftDetailDocument, options);
}

export type NftDetailHookResult = ReturnType<typeof useGetNftDetail>;
export type NftDetailQueryResult = Apollo.QueryResult<NftDetailQuery, NftDetailVariables>;
