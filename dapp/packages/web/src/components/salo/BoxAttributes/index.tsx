/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { toast } from 'react-toastify';
import config from 'config';
import { CustomButtonColors, CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { BigNumberish, ethers } from 'ethers';
import { formatAmountToken } from 'utils';

import { ListingOrder, Nft } from 'lib/graphQL/types';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';

interface IBoxAttributesProps {
  item?: ListingOrder;
  itemNFT: Nft | undefined;
}

const mapKeyValue = [
  { id: 1, name: 'Attack', keyValue: 'gunAttack' },
  { id: 2, name: 'Damage', keyValue: 'gunDamage' },
  { id: 3, name: 'Explosion Damage', keyValue: 'explosionDamageRanger' },
  { id: 4, name: 'Bullet Range', keyValue: 'bulletRange' },
  { id: 5, name: 'Magazine', keyValue: 'gunMagazine' },
  { id: 6, name: 'Reload Time', keyValue: 'gunReloadTime' },
  { id: 7, name: 'Shoot Speed', keyValue: 'gunfireShootSpeed' },
  { id: 8, name: 'Bullet / Single Fire', keyValue: 'singleFireBulletNumber' },
];

const BoxAttributes: React.FunctionComponent<IBoxAttributesProps> = (props) => {
  const { openModal, userWalletId } = useAppContext();
  const { item, itemNFT } = props;
  const [valueInput, setValueInput] = React.useState(0);
  const onChangeValue = (value: number) => setValueInput(value);

  const data = mapKeyValue.map((item) => {
    if (itemNFT?.weaponMetadata) {
      const value = (itemNFT?.weaponMetadata as any)[item.keyValue];
      return { ...item, value };
    }
    return { ...item, value: 0 };
  });

  return (
    <React.Fragment>
      <div className="box-attributes">
        <div className="box-attributes__content">
          <div className="box-attributes__content-data">
            {data.map((item) => {
              return (
                <div className="item-info" key={item.id}>
                  {item.name}: {item.value}
                </div>
              );
            })}
          </div>

          <div className="skill-box">
            <div className="skill-box__info">
              <div className="skill-box__info__gem">
                <img src="/assets/images/Gem/Slot1.png" alt="Slot1" />
              </div>
              <div className="skill-box__info__skill">
                <span className="title">SKILL FIRE AREA</span>
                <span className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing </span>
              </div>
            </div>
            <div className="skill-box__info">
              <div className="skill-box__info__gem">
                <img src="/assets/images/Gem/Slot2.png" alt="Slot1" />
              </div>
              <div className="skill-box__info__skill">
                <span className="title">SKILL FIRE AREA</span>
                <span className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing </span>
              </div>
            </div>
            <div className="skill-box__info">
              <div className="skill-box__info__gem">
                <img src="/assets/images/Gem/Slot3.png" alt="Slot1" />
              </div>
              <div className="skill-box__info__skill">
                <span className="title">SKILL FIRE AREA</span>
                <span className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BoxAttributes;
