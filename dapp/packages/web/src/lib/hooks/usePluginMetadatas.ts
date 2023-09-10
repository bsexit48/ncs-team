import {
  PluginMetadataHookResult,
  PluginMetadatasQuery,
  useGetPluginMetadata,
} from 'lib/graphQL/pluginMetadata';

export function usePluginMetadatas(): PluginMetadataHookResult & {
  items: PluginMetadatasQuery | undefined;
} {
  const res = useGetPluginMetadata();

  return {
    items: res.data,
    ...res,
  };
}
