import {
  CharacterMetadataHookResult,
  CharacterMetadatasQuery,
  useGetCharacterMetadata,
} from 'lib/graphQL/characterMetadata';

export function useCharacterMetadatas(): CharacterMetadataHookResult & {
  items: CharacterMetadatasQuery | undefined;
} {
  const res = useGetCharacterMetadata();

  return {
    items: res.data,
    ...res,
  };
}
