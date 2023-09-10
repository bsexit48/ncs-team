import * as React from 'react';
import { get } from 'lodash';

import { GemMetadata } from 'lib/graphQL/types';

interface IBoxAttributesGemProps {
  gemMetadata: GemMetadata;
}

const mapKeyValue = [
  { id: 1, name: 'Gem type', keyValue: 'gemType' },
  { id: 2, name: 'Gem rarity', keyValue: 'gemRarity' },
  { id: 3, name: 'Primary', keyValue: 'primaryAttributes' },
  { id: 4, name: 'Secondary', keyValue: 'secondaryAttributes' },
  { id: 5, name: 'Token type', keyValue: 'tokenType' },
];
const BoxAttributesGem: React.FunctionComponent<IBoxAttributesGemProps> = (props) => {
  const { gemMetadata } = props;

  const data = mapKeyValue.map((item) => {
    const value = get(gemMetadata, [item.keyValue], '');
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
                  {item.name}: {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoxAttributesGem;
