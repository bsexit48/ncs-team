import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {};

export const GemMetadatasDocument = gql`
  query GemMetadatas {
    GemMetadatas {
      gemType
    }
  }
`;

export type GemMetadatasQuery = {
  GemMetadatas: Array<{
    __typename: 'GemMetadata';
    gemType: string;
  }>;
};

export function useGetGemMetadata(baseOptions?: ApolloReactHooks.QueryHookOptions<GemMetadatasQuery>) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GemMetadatasQuery>(GemMetadatasDocument, options);
}
export type GemMetadataHookResult = ReturnType<typeof useGetGemMetadata>;
export type GemMetadataQueryResult = Apollo.QueryResult<GemMetadatasQuery>;
