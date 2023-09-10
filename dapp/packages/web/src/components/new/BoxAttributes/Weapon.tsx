import * as React from 'react';
import { get } from 'lodash';

import { WeaponMetadata } from 'lib/graphQL/types';

interface IBoxAttributesWeaponProps {
  weaponMetadata: WeaponMetadata;
}

const mapKeyValue = [
  { id: 0, name: 'Rarity', keyValue: 'gunRarity' },
  { id: 1, name: 'Attack', keyValue: 'gunAttack' },
  { id: 2, name: 'Damage', keyValue: 'gunDamage' },
  { id: 3, name: 'Explosion Damage', keyValue: 'explosionDamageRanger' },
  { id: 4, name: 'Bullet Range', keyValue: 'bulletRange' },
  { id: 5, name: 'Magazine', keyValue: 'gunMagazine' },
  { id: 6, name: 'Reload Time', keyValue: 'gunReloadTime' },
  { id: 7, name: 'Shoot Speed', keyValue: 'gunfireShootSpeed' },
  { id: 8, name: 'Bullet / Single Fire', keyValue: 'singleFireBulletNumber' },
];
const BoxAttributesWeapon: React.FunctionComponent<IBoxAttributesWeaponProps> = (props) => {
  const { weaponMetadata } = props;

  const data = mapKeyValue.map((item) => {
    const value = get(weaponMetadata, [item.keyValue], '');
    return { ...item, value };
  });

  return (
    <div className="box-attributes">
      <div className="box-attributes__content">
        <div className="box-attributes__content-data">
          {data.map((item) => {
            return (
              <div className="item-info" key={item.id}>
                <span>
                  {item.name}: {item.value.toString().toUpperCase()}
                </span>
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
  );
};

export default BoxAttributesWeapon;
