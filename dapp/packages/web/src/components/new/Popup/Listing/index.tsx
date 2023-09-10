import * as React from 'react';
import { toast } from 'react-toastify';
import config from 'config';
import { CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import dayjs from 'dayjs';
import { IDataModal } from 'hooks/app/usePopUp';
import { useCallContract } from 'hooks/contracts/useCallContract';
import { useMarketplace } from 'hooks/contracts/useMarketplace';
import { useNFTItem } from 'hooks/contracts/useNFTItem';
import { useToken } from 'hooks/contracts/useToken';
import { useRouter } from 'next/router';
import { shortenTxHash } from 'utils';

import CustomButton from 'components/new/CustomButton';

interface IListingPopUpProps {
  data: IDataModal;
  canClosePopUp: boolean;
  toggleCanClosePopup: (value: boolean) => void;
}

const ListingPopUp: React.FunctionComponent<IListingPopUpProps> = (props) => {
  const router = useRouter();
  const [isClosingPopup, setClosingPopup] = React.useState(false);
  const { canClosePopUp, toggleCanClosePopup, data } = props;
  const { amountToken, address, tokenId } = data;

  const { closeModal } = useAppContext();
  const closePopUp = () => {
    if (receiptCreateOrder) {
      toggleCanClosePopup(true);
      setClosingPopup(true);
    }
    if (!canClosePopUp) {
      return;
    }
    clearApprovalNFTItem();
    clearCreateOrder();
    clearApprovalToken();
    closeModal(ETypePopUp.CLOSE);
  };

  React.useEffect(() => {
    if (isClosingPopup) {
      setClosingPopup(false);
      closePopUp();
      router.push({
        pathname: '/inventory',
        hash: 'listing',
      });
    }
  }, [isClosingPopup]);

  const { approve, isApproved } = useNFTItem();
  const { approveToken } = useToken();
  const { createOrder, getPublicationFee } = useMarketplace();
  const [isApprovedNFTItem, setApprovedNFTItem] = React.useState(false);

  React.useEffect(() => {
    if (address && tokenId) {
      isApproved(address, config['marketplace'], tokenId)
        .then((res) => {
          setApprovedNFTItem(res);
        })
        .catch((err) => console.log(err));
    }
  }, [address, isApproved, tokenId]);

  // Prepare functions
  const {
    error: errorApprovalNFTItem,
    loading: loadingApprovalNFTItem,
    send: callApproveNFTItem,
    tx: receiptApprovalNFTItem,
    clearSendData: clearApprovalNFTItem,
  } = useCallContract();

  const {
    error: errorCreateOrder,
    loading: loadingCreateOrder,
    send: callCreateOrder,
    tx: receiptCreateOrder,
    clearSendData: clearCreateOrder,
  } = useCallContract();

  const {
    error: errorApprovalToken,
    loading: loadingApprovalToken,
    send: callApproveToken,
    tx: receiptApprovalToken,
    clearSendData: clearApprovalToken,
  } = useCallContract();

  const handleApprove = () => {
    if (loadingApprovalNFTItem || !address || !tokenId) return;
    return callApproveNFTItem(approve, address, config['marketplace'], tokenId);
  };

  const handleApproveToken = async () => {
    if (loadingApprovalToken || !amountToken) return;
    const publicationFee = await getPublicationFee(amountToken);
    return callApproveToken(approveToken, config['marketplace'], publicationFee);
  };

  const handleCreateOrder = async () => {
    if (loadingCreateOrder || !address || !tokenId || !amountToken) return;
    const now = dayjs();
    const startSaleAt = now.add(2, 'm').unix();
    const endTime = now.add(7, 'd').unix();

    return callCreateOrder(
      createOrder,
      address,
      tokenId,
      config['tokenAddress'],
      amountToken,
      startSaleAt,
      endTime,
    );
  };

  const handleConfirm = () => {
    if (isApprovedNFTItem) {
      handleApproveToken();
    } else {
      handleApprove();
    }
  };

  // Call function buy box when finish approve using fee token
  React.useEffect(() => {
    if (isApprovedNFTItem || receiptApprovalNFTItem) {
      if (receiptApprovalToken) {
        handleCreateOrder();
      } else {
        handleApproveToken();
      }
    }
    // eslint-disable-next-line
  }, [isApprovedNFTItem, receiptApprovalNFTItem, receiptApprovalToken]);

  // Prevent closing popup when executing function
  React.useEffect(() => {
    if (loadingApprovalNFTItem || loadingApprovalToken || loadingCreateOrder || receiptCreateOrder) {
      toggleCanClosePopup(false);
    } else {
      toggleCanClosePopup(true);
    }
  }, [loadingApprovalNFTItem, loadingApprovalToken, loadingCreateOrder, receiptCreateOrder]);

  // Handle errors
  React.useEffect(() => {
    if (errorCreateOrder?.message) {
      toast.error(errorCreateOrder?.message);
      closePopUp();
    }

    if (errorApprovalNFTItem?.message) {
      toast.error(errorApprovalNFTItem?.message);
      closePopUp();
    }

    if (errorApprovalToken?.message) {
      toast.error(errorApprovalToken?.message);
      closePopUp();
    }
  }, [errorApprovalNFTItem, errorCreateOrder, errorApprovalToken]);

  return (
    <div className="pop-up__wrapper">
      <div className="pop-up__box mt-3">
        <div className="pop-up__title ">List item</div>
        <div className="pop-up__content">
          {receiptCreateOrder ? (
            <div className="pop-up__content-wrapper">
              <img src="/assets/images/success-state.png" alt="success-state" />
              <p>List item successfully</p>
              <p className="success-id">ID: {shortenTxHash(receiptCreateOrder.transactionHash)}</p>
            </div>
          ) : (
            'Allow this app to transfer up to 10000 ultimate_player'
          )}
        </div>
        <div className="pop-up__action">
          {!receiptCreateOrder && (
            <CustomButton
              variants={CustomButtonVariants.BLUE}
              loading={loadingApprovalToken || loadingApprovalNFTItem || loadingCreateOrder}
              text={
                loadingApprovalNFTItem || loadingApprovalToken
                  ? 'Approving...'
                  : loadingCreateOrder
                  ? 'Listing...'
                  : 'Approve & list'
              }
              onClick={handleConfirm}
            />
          )}
          {!(loadingApprovalToken || loadingApprovalNFTItem || loadingCreateOrder) && (
            <div className="text-center mt-1">
              <CustomButton variants={CustomButtonVariants.TEXTED} text="Close" onClick={closePopUp} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingPopUp;
