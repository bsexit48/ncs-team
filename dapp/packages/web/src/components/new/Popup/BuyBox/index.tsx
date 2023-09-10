import * as React from 'react';
import { toast } from 'react-toastify';
import config from 'config';
import { CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { BigNumber } from 'ethers';
import { IDataModal } from 'hooks/app/usePopUp';
import { useBlindBoxSell } from 'hooks/contracts/useBlindBoxSell';
import { useCallContract } from 'hooks/contracts/useCallContract';
import { useToken } from 'hooks/contracts/useToken';
import { useRouter } from 'next/router';
import { shortenTxHash } from 'utils';

import CustomButton from 'components/new/CustomButton';

interface IBuyBoxPopUpProps {
  data: IDataModal;
  canClosePopUp: boolean;
  toggleCanClosePopup: (value: boolean) => void;
}

const BuyBoxPopUp: React.FunctionComponent<IBuyBoxPopUpProps> = (props) => {
  const router = useRouter();
  const { canClosePopUp, toggleCanClosePopup, data } = props;
  const { amountToken, content, amountBox, typeBox, refetchShopBox } = data;
  const { closeModal } = useAppContext();
  const closePopUp = () => {
    if (!canClosePopUp) {
      return;
    }
    clearBuyBox();
    clearApprovalToken();
    closeModal(ETypePopUp.CLOSE);
    if (receiptBuyBox) {
      router.push({
        pathname: 'inventory',
        hash: 'mystery-box',
      });
    }
  };

  const { buyBox } = useBlindBoxSell();
  const { approveToken } = useToken();

  // Prepare functions
  const {
    error: errorBuyBox,
    loading: loadingBuyBox,
    send: callBuyBox,
    tx: receiptBuyBox,
    clearSendData: clearBuyBox,
  } = useCallContract();
  const {
    error: errorApprovalToken,
    loading: loadingApprovalToken,
    send: callApproveToken,
    tx: receiptApprovalToken,
    clearSendData: clearApprovalToken,
  } = useCallContract();

  const handleApproveToken = async () => {
    if (loadingApprovalToken || !amountToken) return;
    return callApproveToken(approveToken, config['blindboxSell'], amountToken);
  };

  const handleBuyBox = () => {
    if (loadingBuyBox || !amountBox) return;
    return callBuyBox(buyBox, BigNumber.from(typeBox), amountBox);
  };

  // Call function buy box when finish approve using fee token
  React.useEffect(() => {
    if (receiptApprovalToken) handleBuyBox();
  }, [receiptApprovalToken]);

  // Prevent closing popup when executing function
  React.useEffect(() => {
    if (loadingApprovalToken || loadingBuyBox) {
      toggleCanClosePopup(false);
    } else {
      toggleCanClosePopup(true);
    }
  }, [loadingApprovalToken, loadingBuyBox]);

  // Handle errors
  React.useEffect(() => {
    if (errorBuyBox?.message) {
      toast.error(errorBuyBox?.message);
      closePopUp();
    }

    if (errorApprovalToken?.message) {
      toast.error(errorApprovalToken?.message);
      closePopUp();
    }
  }, [errorBuyBox, errorApprovalToken]);

  React.useEffect(() => {
    if (receiptBuyBox && refetchShopBox) {
      refetchShopBox(true);
    }
  }, [receiptBuyBox, refetchShopBox]);

  return (
    <div className="pop-up__wrapper">
      <div className="pop-up__box mt-3">
        <div className="pop-up__title ">Buy box</div>
        <div className="pop-up__content">
          {receiptBuyBox ? (
            <div className="pop-up__content-wrapper">
              <img src="/assets/images/success-state.png" alt="success-state" />
              <p>Buy box successfully</p>
              <p className="success-id">ID: {shortenTxHash(receiptBuyBox.transactionHash)}</p>
            </div>
          ) : (
            'Allow this app to transfer up to 10000 ultimate_player'
          )}
        </div>
        <div className="pop-up__action">
          {!receiptBuyBox && (
            <CustomButton
              variants={CustomButtonVariants.BLUE}
              loading={loadingApprovalToken || loadingBuyBox}
              text={loadingApprovalToken ? 'Approving...' : loadingBuyBox ? 'Buying...' : 'Approve & buy'}
              onClick={handleApproveToken}
            />
          )}
          {!(loadingApprovalToken || loadingBuyBox) && (
            <div className="text-center mt-1">
              <CustomButton variants={CustomButtonVariants.TEXTED} text="Close" onClick={closePopUp} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyBoxPopUp;
