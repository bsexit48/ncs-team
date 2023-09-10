/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { toast } from 'react-toastify';
import config from 'config';
import { CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { BigNumber, BigNumberish, ethers } from 'ethers';
import { get, isEmpty } from 'lodash';
import { formatAmountToken } from 'utils';

import { ListingOrder, Nft } from 'lib/graphQL/types';
import CustomButton from 'components/new/CustomButton';
import Rating from 'components/ultimate_player/Rating';

import BoxAttributesCharacter from '../BoxAttributes/Character';
import BoxAttributesGem from '../BoxAttributes/Gem';
import BoxAttributesPlugin from '../BoxAttributes/Plugin';
import BoxAttributesWeapon from '../BoxAttributes/Weapon';
import CustomTextInput from '../CustomTextInput';

interface INftItemDetailProps {
  type: 'buy' | 'inventory' | 'owner-listing';
  item?: ListingOrder;
  itemNFT: Nft;
}

const NftItemDetail: React.FunctionComponent<INftItemDetailProps> = (props) => {
  const { openModal, account } = useAppContext();
  const { item, itemNFT, type } = props;
  const sellPrice = get(item, 'sellPrice', BigNumber.from(0));
  const {
    name,
    nftType,
    description,
    weaponMetadata,
    gemMetadata,
    characterMetadata,
    pluginMetadata,
    tokenId,
    imageUrl,
  } = itemNFT;

  const [valueInput, setValueInput] = React.useState(0);
  const onChangeValue = (value: number) => {
    setValueInput(value);
  };

  const handleButton = () => {
    switch (type) {
      case 'buy':
        if (account) {
          openModal({
            type: ETypePopUp.PURCHASE,
            content: name || '',
            amountToken: sellPrice,
            tokenId: tokenId as BigNumberish,
            address: config[`${nftType.toLowerCase()}Address`],
          });
          return;
        }
        openModal({
          type: ETypePopUp.CONNECT_WALLET,
        });
        break;

      case 'inventory':
        if (!valueInput) {
          toast.error('Please fill price before listing');
          return;
        }
        openModal({
          type: ETypePopUp.LISTING,
          content: name || '',
          amountToken: ethers.utils.parseUnits(`${valueInput}`),
          address: config[`${nftType.toLowerCase()}Address`],
          tokenId: tokenId as BigNumberish,
        });
        break;

      case 'owner-listing':
        openModal({
          type: ETypePopUp.CANCEL,
          content: name || '',
          amountToken: sellPrice,
          address: config[`${nftType.toLowerCase()}Address`],
          tokenId: tokenId as BigNumberish,
        });
        break;
    }
  };

  return (
    <div className="item-nft">
      <div className="item-nft__col">
        <div className="item-nft__image-wrap">
          <div className="mt-1 text-center item-nft__image">
            <img src={imageUrl ? imageUrl : '/assets/images/Guns/gun_1.png'} alt="gun_1" />
          </div>
          {item && (
            <div className="item-nft__price">
              <span>{formatAmountToken(sellPrice)}</span>
              &nbsp;ultimate_player
            </div>
          )}
        </div>

        {type === 'inventory' && (
          <div className="item-nft__input">
            <span>Price: </span>
            <CustomTextInput onChange={onChangeValue} />
          </div>
        )}

        <div className="item-nft__button mt-1">
          <CustomButton
            variants={CustomButtonVariants.ITEM_DETAIL}
            text={
              type === 'inventory' ? 'Listing to sell' : type === 'owner-listing' ? 'Cancel order' : 'buy now'
            }
            onClick={handleButton}
          />
        </div>
      </div>
      <div className="item-nft__col">
        <div className="item-nft__content">
          <div className="d-flex justify-between align-items-center mt-1">
            <div className="item-title-rating">
              <p className="fs-24px text-batman color-white fw-700">{name}</p>
              {weaponMetadata && !isEmpty(weaponMetadata) && (
                <div className="d-flex mt-1">
                  <Rating rating={weaponMetadata.gunStar || 0} />
                </div>
              )}
            </div>
            {weaponMetadata && !isEmpty(weaponMetadata) && (
              <div className="item-level">
                <span>{weaponMetadata.gunLevel || 0}</span>
              </div>
            )}
          </div>
          <div className="mt-1">
            <p className="fs-16px fw-500 color-white">{description}</p>
          </div>
          <div className="mt-2">
            {weaponMetadata && !isEmpty(weaponMetadata) && (
              <BoxAttributesWeapon weaponMetadata={weaponMetadata} />
            )}
            {gemMetadata && !isEmpty(gemMetadata) && <BoxAttributesGem gemMetadata={gemMetadata} />}
            {characterMetadata && !isEmpty(characterMetadata) && (
              <BoxAttributesCharacter characterMetadata={characterMetadata} />
            )}
            {pluginMetadata && !isEmpty(pluginMetadata) && (
              <BoxAttributesPlugin pluginMetadata={pluginMetadata} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItemDetail;
