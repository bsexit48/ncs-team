import * as React from 'react';
import { toast } from 'react-toastify';
import config from 'config';
import { CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { IDataModal } from 'hooks/app/usePopUp';
import { useCallContract } from 'hooks/contracts/useCallContract';
import { useMarketplace } from 'hooks/contracts/useMarketplace';
import { useToken } from 'hooks/contracts/useToken';
import { useRouter } from 'next/router';
import { shortenTxHash } from 'utils';

import CustomButton from 'components/new/CustomButton';

interface IPurchasePopUpProps {
  data: IDataModal;
  canClosePopUp: boolean;
  toggleCanClosePopup: (value: boolean) => void;
}

const PurchasePopUp: React.FunctionComponent<IPurchasePopUpProps> = (props) => {
  const router = useRouter();
  const [isClosingPopup, setClosingPopup] = React.useState(false);

  const { canClosePopUp, toggleCanClosePopup, data } = props;
  const { amountToken, address, tokenId } = data;

  const { closeModal } = useAppContext();
  const closePopUp = () => {
    if (receiptExecuteOrder) {
      toggleCanClosePopup(true);
      setClosingPopup(true);
    }
    if (!canClosePopUp) {
      return;
    }
    clearExecuteOrder();
    clearApprovalToken();
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

  const { executeOrder } = useMarketplace();
  const { approveToken } = useToken();

  // Prepare functions
  const {
    error: errorExecuteOrder,
    loading: loadingExecuteOrder,
    send: callExecuteOrder,
    tx: receiptExecuteOrder,
    clearSendData: clearExecuteOrder,
  } = useCallContract();

  const {
    error: errorApprovalToken,
    loading: loadingApprovalToken,
    send: callApproveToken,
    tx: receiptApprovalToken,
    clearSendData: clearApprovalToken,
  } = useCallContract();

  const handleApproveToken = () => {
    if (loadingApprovalToken || !amountToken) return;
    return callApproveToken(approveToken, config['marketplace'], amountToken);
  };

  const handleExecuteOrder = () => {
    if (loadingExecuteOrder || !address || !tokenId || !amountToken) return;
    return callExecuteOrder(executeOrder, address, tokenId, amountToken);
  };

  // Call function buy box when finish approve using fee token
  React.useEffect(() => {
    if (receiptApprovalToken) handleExecuteOrder();
  }, [receiptApprovalToken]);

  // Prevent closing popup when executing function
  React.useEffect(() => {
    if (loadingExecuteOrder || loadingApprovalToken || receiptExecuteOrder) {
      toggleCanClosePopup(false);
    } else {
      toggleCanClosePopup(true);
    }
  }, [loadingExecuteOrder, loadingApprovalToken, receiptExecuteOrder]);

  // Handle errors
  React.useEffect(() => {
    if (errorExecuteOrder?.message) {
      toast.error(errorExecuteOrder?.message);
      closePopUp();
    }

    if (errorApprovalToken?.message) {
      toast.error(errorApprovalToken?.message);
      closePopUp();
    }
  }, [errorExecuteOrder, errorApprovalToken]);

  return (
    <div className="pop-up__wrapper">
      <div className="pop-up__box mt-3">
        <div className="pop-up__title ">Buy item</div>
        <div className="pop-up__content">
          {receiptExecuteOrder ? (
            <div className="pop-up__content-wrapper">
              <img src="/assets/images/success-state.png" alt="success-state" />
              <p>Buy item successfully</p>
              <p className="success-id">ID: {shortenTxHash(receiptExecuteOrder.transactionHash)}</p>
            </div>
          ) : (
            'Allow this app to transfer up to 10000 ultimate_player'
          )}
        </div>
        <div className="pop-up__action">
          {!receiptExecuteOrder && (
            <CustomButton
              variants={CustomButtonVariants.BLUE}
              loading={loadingApprovalToken || loadingExecuteOrder}
              text={
                loadingApprovalToken ? 'Approving...' : loadingExecuteOrder ? 'Buying...' : 'Approve & buy'
              }
              onClick={handleApproveToken}
            />
          )}
          {!(loadingApprovalToken || loadingExecuteOrder) && (
            <div className="text-center mt-1">
              <CustomButton variants={CustomButtonVariants.TEXTED} text="Close" onClick={closePopUp} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchasePopUp;
