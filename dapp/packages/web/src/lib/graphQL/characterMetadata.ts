import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

import { CharacterMetadataScalarFieldEnum, Exact } from './types';
const defaultOptions = {};

export const CharacterMetadatasDocument = gql`
  query CharacterMetadatas {
    characterMetadatas {
      heroClass
    }
  }
`;

export type CharacterMetadatasQuery = {
  characterMetadatas: Array<{
    __typename: 'CharacterMetadata';
    heroClass: string;
  }>;
};

export type GetHeroClassVariables = Exact<{
  distinct: CharacterMetadataScalarFieldEnum;
}>;

export function useGetCharacterMetadata(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CharacterMetadatasQuery, GetHeroClassVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<CharacterMetadatasQuery, GetHeroClassVariables>(
    CharacterMetadatasDocument,
    options,
  );
}
export type CharacterMetadataHookResult = ReturnType<typeof useGetCharacterMetadata>;
export type CharacterMetadataQueryResult = Apollo.QueryResult<CharacterMetadatasQuery, GetHeroClassVariables>;
