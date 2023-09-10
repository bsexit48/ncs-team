import { ETypePopUp } from 'constants/index';
import { IDataModal } from 'hooks/app/usePopUp';

import { CharacterMetadatasQuery } from 'lib/graphQL/characterMetadata';
import { GemMetadatasQuery } from 'lib/graphQL/gemMetadata';
import { PluginMetadatasQuery } from 'lib/graphQL/pluginMetadata';
import { WeaponMetadatasQuery } from 'lib/graphQL/weaponMetadata';

export type IAppContext = {
  activate: (connector: string) => void;
  deactivate: () => void;
  isConnected: boolean;
  error: Error | null;
  userWalletId: number | undefined;
  account: string | null;
  characterItems: CharacterMetadatasQuery | undefined;
  gemItems: GemMetadatasQuery | undefined;
  weaponItems: WeaponMetadatasQuery | undefined;
  pluginItems: PluginMetadatasQuery | undefined;
  openModal: (data: IDataModal) => void;
  isOpen: boolean;
  data: IDataModal;
  closeModal: (type: ETypePopUp) => void;
  tokenBalance: string;
  refetchTokenBalance: (account: string) => void;
  status: string;
};
