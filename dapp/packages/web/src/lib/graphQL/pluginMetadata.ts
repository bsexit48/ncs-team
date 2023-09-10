import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {};

export const PluginMetadatasDocument = gql`
  query PluginMetadatas {
    pluginMetadatas {
      pluginType
    }
  }
`;

export type PluginMetadatasQuery = {
  pluginMetadatas: Array<{
    __typename: 'PluginMetadata';
    pluginType: string;
  }>;
};

export function useGetPluginMetadata(baseOptions?: ApolloReactHooks.QueryHookOptions<PluginMetadatasQuery>) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<PluginMetadatasQuery>(PluginMetadatasDocument, options);
}
export type PluginMetadataHookResult = ReturnType<typeof useGetPluginMetadata>;
export type PluginMetadataQueryResult = Apollo.QueryResult<PluginMetadatasQuery>;
