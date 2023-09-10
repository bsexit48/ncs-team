import {
  useGetWeaponMetadata,
  WeaponMetadataHookResult,
  WeaponMetadatasQuery,
} from 'lib/graphQL/weaponMetadata';

export function useWeaponMetadatas(): WeaponMetadataHookResult & {
  items: WeaponMetadatasQuery | undefined;
} {
  const res = useGetWeaponMetadata();

  return {
    items: res.data,
    ...res,
  };
}
