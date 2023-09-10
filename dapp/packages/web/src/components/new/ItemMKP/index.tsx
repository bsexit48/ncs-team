/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { BigNumber } from 'ethers';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { formatAmountToken } from 'utils';

import { ListingOrder, Nft, NftType } from 'lib/graphQL/types';
import Rating from 'components/ultimate_player/Rating';

interface IItemMKPProps {
  type: 'buy' | 'inventory' | 'owner-listing';
  item?: ListingOrder;
  itemNFT: Nft;
}

const itemMKPVariants = ['blue', 'purple'];

const ItemMKP: React.FunctionComponent<IItemMKPProps> = (props) => {
  const router = useRouter();
  const { item, type, itemNFT } = props;

  const sellPrice = get(item, 'sellPrice', BigNumber.from(1));

  const idOrder = get(item, 'id', null);
  const idNFT = get(itemNFT, 'id', null);
  const gunStar = get(itemNFT, 'weaponMetadata.gunStar', 0);
  const pluginStar = get(itemNFT, 'pluginMetadata.pluginStar', 0);
  const nftType = get(itemNFT, 'nftType', '');
  const imgUrl = get(itemNFT, 'imageUrl', '');
  const name = get(itemNFT, 'name', '');

  const heroRarity = get(itemNFT, 'characterMetadata.heroRarity', 0);
  const gunRarity = get(itemNFT, 'weaponMetadata.gunRarity', 0);

  const goToItemDetail = (id: BigInt | null) => {
    if (id) {
      router.push({
        pathname: `/items/${id}`,
        hash: type,
      });
    }
  };

  const variantIdx = 0; // Math.floor(Math.random() * itemMKPVariants.length);
  let rareCssClass = 'none';

  switch (nftType) {
    case NftType.WEAPON:
      rareCssClass = gunRarity.toString().toLowerCase();
      break;
    case NftType.CHARACTER:
      rareCssClass = heroRarity.toString().toLowerCase();
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <div
        className={`item-mkp ${type} ${itemMKPVariants[variantIdx]}`}
        onClick={() => goToItemDetail(type !== 'inventory' ? idOrder : idNFT)}
      >
        <div className="item-mkp__content">
          <div className={`tooltip content-detail__rare ${rareCssClass}`}>
            <span className={`tooltiptext ${rareCssClass}`}>{rareCssClass.toString().toUpperCase()}</span>
          </div>

          <div className={`content-detail__image ${nftType === NftType.WEAPON ? 'gun_img' : ''}`}>
            <img src={imgUrl ? imgUrl : '/assets/images/Guns/gun_1.png'} alt={'gun'} />
          </div>

          <div className="content-detail__information">
            <span>{name}</span>
            <div className="d-flex justify-center">
              {(nftType === NftType.WEAPON || nftType === NftType.PLUGIN) && (
                <Rating rating={nftType === NftType.WEAPON ? gunStar : pluginStar} />
              )}
            </div>
          </div>
          {(type === 'buy' || type === 'owner-listing') && (
            <div className="content-detail__price">
              <span>{formatAmountToken(sellPrice)}</span>
              ultimate_player
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemMKP;
