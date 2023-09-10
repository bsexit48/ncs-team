import * as React from 'react';

import ItemInventoryDetail from './Inventory';
import ItemOrderDetail from './Order';

interface IItemDetailContentProps {
  type: 'buy' | 'inventory' | 'owner-listing';
  id: number;
}

const ItemDetailContent: React.FunctionComponent<IItemDetailContentProps> = (props) => {
  const { id, type } = props;
  const renderItem = () => {
    switch (type) {
      case 'inventory':
        return <ItemInventoryDetail id={id} type={type} />;
      case 'buy':
      case 'owner-listing':
        return <ItemOrderDetail id={id} type={type} />;
    }
  };

  return <React.Fragment>{renderItem()}</React.Fragment>;
};

export default ItemDetailContent;
