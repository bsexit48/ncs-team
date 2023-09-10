import * as React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import AppContextWrapper from 'context';
import useConnectWallet from 'hooks/app/useConnectWallet';
import usePopUp from 'hooks/app/usePopUp';

import { useCharacterMetadatas } from 'lib/hooks/useCharacterMetadatas';
import { useGemMetadatas } from 'lib/hooks/useGemMetadatas';
import { usePluginMetadatas } from 'lib/hooks/usePluginMetadatas';
import { useWeaponMetadatas } from 'lib/hooks/useWeaponMetadatas';
import Footer from 'components/new/Footer';
import Header from 'components/new/Header';
import PopUp from 'components/new/Popup';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  // GET METADATA: GEM, CHARACTER, WEAPON, PLUGIN
  const { items: characterItems } = useCharacterMetadatas();
  const { items: gemItems } = useGemMetadatas();
  const { items: weaponItems } = useWeaponMetadatas();
  const { items: pluginItems } = usePluginMetadatas();

  // GET ACCOUNT
  const {
    account,
    activate,
    deactivate,
    isConnected,
    tokenBalance,
    userWalletId,
    error,
    status,
    refetchTokenBalance,
  } = useConnectWallet();
  const { isOpen, data, openModal, closeModal } = usePopUp();

  const appState = {
    activate,
    deactivate,
    isConnected,
    error,
    account,
    userWalletId,
    characterItems,
    gemItems,
    weaponItems,
    pluginItems,
    openModal,
    isOpen,
    data,
    closeModal,
    tokenBalance,
    refetchTokenBalance,
    status,
  };

  return (
    <SkeletonTheme baseColor="#030B1C" highlightColor="#243557">
      <div className="app">
        <div className="app-content">
          <AppContextWrapper state={appState}>
            <Header />
            <div className="children-content">{props.children}</div>
            <Footer />
            <PopUp />
          </AppContextWrapper>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default App;
