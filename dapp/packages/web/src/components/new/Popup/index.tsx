/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';

import BuyBoxPopUp from './BuyBox';
import CancelPopUp from './Cancel';
import ConnectWalletPopUp from './ConnectWallet';
import ListingPopUp from './Listing';
import OpenBoxPopUp from './OpenBox';
import PurchasePopUp from './Purchase';

interface IPopUpProps {}

const PopUp: React.FunctionComponent<IPopUpProps> = (props) => {
  const { isOpen, data, closeModal } = useAppContext();
  const { type } = data;

  const [canClosePopUp, setCanClosePopUp] = React.useState(true);
  const toggleCanClosePopup = (value: boolean) => setCanClosePopUp(value);

  const renderPopup = () => {
    switch (type) {
      case ETypePopUp.CONNECT_WALLET:
        return <ConnectWalletPopUp />;

      case ETypePopUp.BUY_BOX:
        return (
          <BuyBoxPopUp data={data} canClosePopUp={canClosePopUp} toggleCanClosePopup={toggleCanClosePopup} />
        );

      case ETypePopUp.LISTING:
        return (
          <ListingPopUp data={data} canClosePopUp={canClosePopUp} toggleCanClosePopup={toggleCanClosePopup} />
        );

      case ETypePopUp.CANCEL:
        return (
          <CancelPopUp data={data} canClosePopUp={canClosePopUp} toggleCanClosePopup={toggleCanClosePopup} />
        );

      case ETypePopUp.PURCHASE:
        return (
          <PurchasePopUp
            data={data}
            canClosePopUp={canClosePopUp}
            toggleCanClosePopup={toggleCanClosePopup}
          />
        );

      case ETypePopUp.OPEN_BOX:
        return (
          <OpenBoxPopUp data={data} canClosePopUp={canClosePopUp} toggleCanClosePopup={toggleCanClosePopup} />
        );
    }
  };

  const closePopUp = () => {
    if (!canClosePopUp) {
      return;
    }
    closeModal(ETypePopUp.CLOSE);
  };

  return (
    <React.Fragment>
      <div className={`pop-up ${isOpen ? 'open' : ''}`}>
        {renderPopup()}
        <div className={`pop-up__overlay ${isOpen ? 'open' : ''}`} onClick={closePopUp}></div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;
