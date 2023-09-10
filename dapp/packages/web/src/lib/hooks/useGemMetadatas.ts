import { GemMetadataHookResult, GemMetadatasQuery, useGetGemMetadata } from 'lib/graphQL/gemMetadata';

export function useGemMetadatas(): GemMetadataHookResult & {
  items: GemMetadatasQuery | undefined;
} {
  const res = useGetGemMetadata();

  return {
    items: res.data,
    ...res,
  };
}
