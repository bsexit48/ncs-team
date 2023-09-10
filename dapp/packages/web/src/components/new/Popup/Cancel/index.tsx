import * as React from 'react';
import { toast } from 'react-toastify';
import { CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { IDataModal } from 'hooks/app/usePopUp';
import { useCallContract } from 'hooks/contracts/useCallContract';
import { useMarketplace } from 'hooks/contracts/useMarketplace';
import { useRouter } from 'next/router';
import { shortenTxHash } from 'utils';

import CustomButton from 'components/new/CustomButton';

interface ICancelPopUpProps {
  data: IDataModal;
  canClosePopUp: boolean;
  toggleCanClosePopup: (value: boolean) => void;
}

const CancelPopUp: React.FunctionComponent<ICancelPopUpProps> = (props) => {
  const router = useRouter();
  const [isClosingPopup, setClosingPopup] = React.useState(false);

  const { canClosePopUp, toggleCanClosePopup, data } = props;
  const { address, tokenId } = data;
  const { cancelOrder } = useMarketplace();
  const { closeModal } = useAppContext();

  const closePopUp = () => {
    if (receiptCancelOrder) {
      toggleCanClosePopup(true);
      setClosingPopup(true);
    }
    if (!canClosePopUp) {
      return;
    }
    clearCancelOrder();
    closeModal(ETypePopUp.CLOSE);
  };

  React.useEffect(() => {
    if (isClosingPopup) {
      setClosingPopup(false);
      closePopUp();
      router.push({
        pathname: '/inventory',
      });
    }
  }, [isClosingPopup]);

  // Prepare functions
  const {
    error: errorCancelOrder,
    loading: loadingCancelOrder,
    send: callCancelOrder,
    tx: receiptCancelOrder,
    clearSendData: clearCancelOrder,
  } = useCallContract();

  const handleCancelOrder = () => {
    if (loadingCancelOrder || !address || !tokenId) return;
    return callCancelOrder(cancelOrder, address, tokenId);
  };

  // Prevent closing popup when executing function
  React.useEffect(() => {
    if (loadingCancelOrder || receiptCancelOrder) {
      toggleCanClosePopup(false);
    } else {
      toggleCanClosePopup(true);
    }
  }, [loadingCancelOrder, receiptCancelOrder]);

  // Handle errors
  React.useEffect(() => {
    if (errorCancelOrder?.message) {
      toast.error(errorCancelOrder?.message);
      closePopUp();
    }
  }, [errorCancelOrder]);

  return (
    <div className="pop-up__wrapper">
      <div className="pop-up__box mt-3">
        <div className="pop-up__title ">Cancel listing item</div>
        <div className="pop-up__content">
          {receiptCancelOrder ? (
            <div className="pop-up__content-wrapper">
              <img src="/assets/images/success-state.png" alt="success-state" />
              <p>Cancel listing item successfully</p>
              <p className="success-id">ID: {shortenTxHash(receiptCancelOrder.transactionHash)}</p>
            </div>
          ) : (
            'Allow this app to transfer up to 10000 ultimate_player'
          )}
        </div>
        <div className="pop-up__action">
          {!receiptCancelOrder && (
            <CustomButton
              variants={CustomButtonVariants.BLUE}
              loading={loadingCancelOrder}
              text={loadingCancelOrder ? 'Canceling...' : 'Cancel list item'}
              onClick={handleCancelOrder}
            />
          )}
          {!loadingCancelOrder && (
            <div className="text-center mt-1">
              <CustomButton variants={CustomButtonVariants.TEXTED} text="Close" onClick={closePopUp} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CancelPopUp;
