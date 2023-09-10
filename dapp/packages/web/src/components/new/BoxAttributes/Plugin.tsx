import * as React from 'react';
import { get } from 'lodash';

import { PluginMetadata } from 'lib/graphQL/types';

interface IBoxAttributesPluginProps {
  pluginMetadata: PluginMetadata;
}

const mapKeyValue = [
  { id: 1, name: 'Plugin type', keyValue: 'pluginType' },
  { id: 3, name: 'Primary', keyValue: 'primaryAttributes' },
  { id: 4, name: 'Token type', keyValue: 'tokenType' },
];
const BoxAttributesPlugin: React.FunctionComponent<IBoxAttributesPluginProps> = (props) => {
  const { pluginMetadata } = props;

  const data = mapKeyValue.map((item) => {
    const value = get(pluginMetadata, [item.keyValue], '');
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

export default BoxAttributesPlugin;
