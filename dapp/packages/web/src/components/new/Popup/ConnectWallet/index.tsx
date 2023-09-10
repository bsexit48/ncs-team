import * as React from 'react';
import { CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { addToNetwork, getAccountAndChain } from 'utils';

import CustomButton from 'components/new/CustomButton';

interface IConnectWalletPopUp {}

const ConnectWalletPopUp: React.FunctionComponent<IConnectWalletPopUp> = (props) => {
  const { closeModal, activate, error } = useAppContext();
  const closePopUp = () => {
    closeModal(ETypePopUp.CLOSE);
  };

  const login = () => {
    activate('injected');
    closePopUp();
  };

  React.useEffect(() => {
    const handleWrongNetwork = async () => {
      if (error?.name === 'ChainUnsupportedError') {
        const { account } = await getAccountAndChain();
        addToNetwork(account, login);
      }
    };
    handleWrongNetwork();
  }, [error]);

  return (
    <div className="pop-up__wrapper">
      <div className="pop-up__close">
        <img src={'/assets/images/blue-close.png'} alt="blue-close" onClick={closePopUp} />
      </div>
      <div className="pop-up__box">
        <div className="pop-up__title ">Connect Wallet</div>
        <div className="pop-up__content">
          We only detect your wallet address to retch your asset. We do not access the wallet or perform any
          operation with it
        </div>
        <div className="pop-up__action">
          <CustomButton variants={CustomButtonVariants.BLUE} text="Metamask" onClick={login} />
          <CustomButton variants={CustomButtonVariants.BLUE} text="Other wallet" onClick={closePopUp} />
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPopUp;
