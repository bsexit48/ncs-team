/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { toast } from 'react-toastify';
import config from 'config';
import { CustomButtonColors, CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { BigNumberish, ethers } from 'ethers';
import { itemsBoxSkill } from 'mockData/boxSkillItems';
import { formatAmountToken } from 'utils';

import { ListingOrder, Nft } from 'lib/graphQL/types';
import BoxAttributes from 'components/ultimate_player/BoxAttributes';
import BoxSkill from 'components/ultimate_player/BoxSkill';
import Rating from 'components/ultimate_player/Rating';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
interface INftItemDetailProps {
  item?: ListingOrder;
  itemNFT: Nft | undefined;
}

const NftItemDetail: React.FunctionComponent<INftItemDetailProps> = (props) => {
  const { openModal, userWalletId } = useAppContext();
  const { item, itemNFT } = props;
  const [valueInput, setValueInput] = React.useState(0);
  const onChangeValue = (value: number) => setValueInput(value);

  const renderItemsSkill = () => {
    return itemsBoxSkill.map((item, index) => {
      return <BoxSkill item={item} key={index} />;
    });
  };

  return (
    <React.Fragment>
      {itemNFT ? (
        <div className="marketplace-item">
          <div className="marketplace-item__col">
            <div className="marketplace-item__image-wrap">
              <div className="mt-1 text-center marketplace-item__image">
                <img src="/assets/images/Guns/gun_1.png" alt="gun_1" />
              </div>
              {item?.sellPrice && (
                <div className="marketplace-item__price">
                  <span>{formatAmountToken(item?.sellPrice)}</span>
                  &nbsp;ultimate_player
                </div>
              )}
            </div>

            <div className="mt-1 marketplace-item__purchase">
              <div className="marketplace-item__price-wrap">
                <div className="marketplace-item__price-box">
                  <CustomInput onChange={onChangeValue} />
                </div>
              </div>

              <div className="marketplace-item__buy-now">
                <CustomButton
                  variants={CustomButtonVariants.BUY_NOW}
                  color={CustomButtonColors.ORANGE}
                  text={
                    !item?.sellPrice
                      ? 'Sell now'
                      : Number(item.sellUserWalletId) === userWalletId
                      ? 'Cancel sell'
                      : 'Buy now'
                  }
                  onClick={() => {
                    if (!item?.sellPrice) {
                      if (!valueInput) {
                        toast.error('Please fill amount token');
                        return;
                      }
                      openModal({
                        type: ETypePopUp.LISTING,
                        content: itemNFT?.name || 'Hardcode item',
                        amountToken: ethers.utils.parseUnits(`${valueInput}`),
                        address: config[`${itemNFT?.nftType.toLowerCase()}Addrress`],
                        tokenId: itemNFT?.tokenId as BigNumberish,
                      });
                    } else {
                      if (Number(item?.sellUserWalletId) === userWalletId) {
                        openModal({
                          type: ETypePopUp.CANCEL,
                          content: itemNFT?.name || '',
                          amountToken: item?.sellPrice,
                          address: config[`${itemNFT?.nftType.toLowerCase()}Addrress`],
                          tokenId: itemNFT?.tokenId as BigNumberish,
                        });
                      } else {
                        openModal({
                          type: ETypePopUp.PURCHASE,
                          content: itemNFT?.name || '',
                          amountToken: item?.sellPrice,
                          tokenId: itemNFT?.tokenId as BigNumberish,
                          address: config[`${itemNFT?.nftType.toLowerCase()}Addrress`],
                        });
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="marketplace-item__col">
            <div className="marketplace-item__content">
              <div className="d-flex justify-between align-items-center mt-1">
                <div className="item-title-rating">
                  <p className="fs-24px text-batman color-white fw-700">{itemNFT.name}</p>
                  <div className="d-flex mt-1">
                    <Rating rating={itemNFT.weaponMetadata?.gunStar || 0} />
                  </div>
                </div>
                <div className="item-level">
                  <span>{itemNFT.weaponMetadata?.gunLevel || 0}</span>
                </div>
              </div>
              <div className="mt-1">
                <p className="fs-16px fw-500 color-white">{itemNFT.description}</p>
              </div>
              {/* <div className="d-flex align-items-center mt-1">
                <div className="item-type" />
                <p className="fs-30px fw-500 color-white">{itemNFT.weaponMetadata?.gunType || ''}</p>
              </div> */}
              {/* <div className="mt-1">
                <p className="fs-40px fw-700 color-silver" style={{ marginLeft: '4rem' }}>
                  Common
                </p>
              </div> */}
              <div className="mt-1">
                <BoxAttributes item={item} itemNFT={itemNFT} />
              </div>
              {/* <div className="mt-1">{renderItemsSkill()}</div> */}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default NftItemDetail;
