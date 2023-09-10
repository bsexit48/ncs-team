import * as React from 'react';
import { get } from 'lodash';

import { CharacterMetadata } from 'lib/graphQL/types';

interface IBoxAttributesCharacterProps {
  characterMetadata: CharacterMetadata;
}

const mapKeyValue = [
  { id: 1, name: 'Hero Rarity', keyValue: 'heroRarity' },
  { id: 2, name: 'Hero Class', keyValue: 'heroClass' },
  { id: 3, name: 'Attack', keyValue: 'attack' },
  { id: 4, name: 'HP', keyValue: 'hp' },
  { id: 5, name: 'Defense', keyValue: 'defense' },
  { id: 6, name: 'Critical Rate', keyValue: 'criticalRate' },
  { id: 7, name: 'Critical Damage', keyValue: 'criticalDamage' },
  { id: 8, name: 'Shoot Speed', keyValue: 'shotSpeed' },
  { id: 9, name: 'Move Speed', keyValue: 'moveSpeed' },
];
const BoxAttributesCharacter: React.FunctionComponent<IBoxAttributesCharacterProps> = (props) => {
  const { characterMetadata } = props;

  const data = mapKeyValue.map((item) => {
    const value = get(characterMetadata, [item.keyValue], '');

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
      </div>
    </div>
  );
};

export default BoxAttributesCharacter;
