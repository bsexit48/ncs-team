import * as React from 'react';
import { toast } from 'react-toastify';
import config from 'config';
import { CustomButtonVariants, ETypeBox, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { ethers, Signer } from 'ethers';
import { BigNumber } from 'ethers';
import { IDataModal } from 'hooks/app/usePopUp';
import { useBlindBox } from 'hooks/contracts/useBlindBox';
import { useCallContract } from 'hooks/contracts/useCallContract';
import { last } from 'lodash';
import { useRouter } from 'next/router';

import { useNftDetail } from 'lib/hooks/useNftDetail';
import CustomButton from 'components/new/CustomButton';

interface IOpenBoxPopUpProps {
  data: IDataModal;
  canClosePopUp: boolean;
  toggleCanClosePopup: (value: boolean) => void;
}

const OpenBoxPopUp: React.FunctionComponent<IOpenBoxPopUpProps> = (props) => {
  const { canClosePopUp, data } = props;
  const { closeModal } = useAppContext();
  const { typeBox } = data;
  const { openBox, approve } = useBlindBox();

  const [isLoading, setLoading] = React.useState(false);
  const toggleLoading = (value: boolean) => {
    setLoading(value);
  };

  const [idUnboxNFT, setIdUnboxNFT] = React.useState(0);
  const [idUnboxTypeNFT, setIdUnboxTypeNFT] = React.useState('');

  const updateIdUnboxNFT = (value: number) => {
    setIdUnboxNFT(value);
  };

  const updateIdUnboxTypeNFT = (value: string) => {
    setIdUnboxTypeNFT(value);
  };

  const closePopUp = () => {
    if (!canClosePopUp) {
      return;
    }
    clearApprovalBox();
    closeModal(ETypePopUp.CLOSE);
  };

  // Prepare functions

  const {
    error: errorApprovalBox,
    loading: loadingApprovalBox,
    send: callApproveBox,
    tx: receiptApproveBox,
    clearSendData: clearApprovalBox,
  } = useCallContract();

  const handleApproveBox = () => {
    if (loadingApprovalBox) return;
    return callApproveBox(approve);
  };

  const handleOpenBox = () => {
    if (isLoading) return;
    toggleLoading(true);
    // openBox(BigNumber.from(typeBox)).then((res) => {
    //   updateIdUnboxNFT(Number(res));
    // });

    openBox(BigNumber.from(typeBox)).then(async (transaction) => {
      try {
        const receipt = await transaction.wait(1);
        const { logs } = receipt;
        const lastLog = last(logs);
        if (lastLog) {
          console.log(lastLog);
          const { data, topics } = lastLog;
          updateIdUnboxNFT(Number(data));

          const addressDecode = ethers.utils.defaultAbiCoder.decode(['address'], topics[1]).toString();
          console.log(addressDecode);

          updateIdUnboxTypeNFT(addressDecode);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  React.useEffect(() => {
    if (receiptApproveBox) handleOpenBox();
  }, [receiptApproveBox]);

  // Handle errors
  React.useEffect(() => {
    if (errorApprovalBox?.message) {
      toast.error(errorApprovalBox?.message);
      closePopUp();
    }
  }, [errorApprovalBox]);

  return (
    <React.Fragment>
      <div className="pop-up__wrapper">
        <div className="pop-up__box mt-3">
          <div className="pop-up__title ">Open box</div>
          <div className="pop-up__content">Allow this app to transfer up to 10000 ultimate_player</div>
          <div className="pop-up__action">
            {!idUnboxNFT && (
              <CustomButton
                variants={CustomButtonVariants.BLUE}
                loading={loadingApprovalBox}
                text={loadingApprovalBox ? 'Approving...' : 'Approve & open box'}
                onClick={handleApproveBox}
              />
            )}
            {!loadingApprovalBox && (
              <div className="text-center mt-1">
                <CustomButton variants={CustomButtonVariants.TEXTED} text="Close" onClick={closePopUp} />
              </div>
            )}
          </div>
        </div>
      </div>
      {isLoading && (
        <div className={`video-unbox open`}>
          <video width="100%" height="100%" loop autoPlay muted>
            <source
              src={`/assets/Chest/${typeBox === ETypeBox.NORMAL ? 'normal' : 'vip'}-box.webm`}
              type="video/webm"
            />
          </video>
        </div>
      )}
      {idUnboxNFT && (
        <UnboxItem
          id={idUnboxNFT}
          nftType={idUnboxTypeNFT}
          toggleLoading={toggleLoading}
          closePopUp={closePopUp}
        />
      )}
    </React.Fragment>
  );
};

export default OpenBoxPopUp;

interface IUnboxItemProps {
  id: number;
  nftType: string;
  toggleLoading: (value: boolean) => void;
  closePopUp: () => void;
}

const UnboxItem: React.FunctionComponent<IUnboxItemProps> = (props) => {
  const { id, nftType, toggleLoading, closePopUp } = props;
  const router = useRouter();

  // console.log({ id, nftType });

  // namnh rem
  // const { loading: loadingNFT, nft } = useNftDetail({ id });
  // Namnh add
  // const arrNFTAddress = [
  //   config['weaponAddress'],
  //   config['gemAddress'],
  //   config['pluginAddress'],
  //   config['characterAddress'],
  // ];
  // const nftadd = arrNFTAddress[idType];
  console.log({ unique_nft_address_token_id: { nftAddress: nftType, tokenId: id } });
  const { loading: loadingNFT, nft } = useNftDetail({
    unique_nft_address_token_id: { nftAddress: nftType, tokenId: id },
  });

  console.log({ loadingNFT, nft });

  let tempNFTId = 0;

  if (nft) {
    tempNFTId = Number(nft?.id);
  }

  React.useEffect(() => {
    if (nft && !loadingNFT) {
      toggleLoading(false);
    }
  }, [nft, loadingNFT]);

  const goToItemDetail = () => {
    closePopUp();
    router.push({
      pathname: `/items/${tempNFTId}`,
      hash: 'inventory',
    });
  };

  return (
    <React.Fragment>
      <div className={`item-unbox open`}>
        <div className="item-unbox__content">
          <div className="item-unbox__content__image-wrap">
            <div className="mt-1 text-center item-unbox__content__image">
              <img src={nft?.imageUrl ? nft?.imageUrl : '/assets/images/Guns/gun_1.png'} alt="nft" />
            </div>
          </div>

          <div className="item-nft__button mt-1">
            <CustomButton
              variants={CustomButtonVariants.ITEM_DETAIL}
              text={'View detail'}
              onClick={goToItemDetail}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
