import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {};

export const WeaponMetadatasDocument = gql`
  query WeaponMetadatas {
    weaponMetadatas {
      gunType
    }
  }
`;

export type WeaponMetadatasQuery = {
  weaponMetadatas: Array<{
    __typename: 'WeaponMetadata';
    gunType: string;
  }>;
};

export function useGetWeaponMetadata(baseOptions?: ApolloReactHooks.QueryHookOptions<WeaponMetadatasQuery>) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<WeaponMetadatasQuery>(WeaponMetadatasDocument, options);
}
export type WeaponMetadataHookResult = ReturnType<typeof useGetWeaponMetadata>;
export type WeaponMetadataQueryResult = Apollo.QueryResult<WeaponMetadatasQuery>;
