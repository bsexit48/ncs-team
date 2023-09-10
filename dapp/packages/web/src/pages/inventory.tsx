import * as React from 'react';
import { useAppContext } from 'context';
import MyBoxes from 'layouts/new/MyBoxes';
import MyInventory from 'layouts/new/MyInventory';
import MyListing from 'layouts/new/MyListing';
import { useRouter } from 'next/router';

import CustomHead from 'components/helpers/CustomHead';

interface IInventoryProps {}

const Inventory: React.FunctionComponent<IInventoryProps> = (props) => {
  const { userWalletId, account } = useAppContext();
  const [selectedItem, setSelectedItem] = React.useState('');
  const router = useRouter();
  const toggleSelectedItem = (value: string) => {
    router.push({
      pathname: '/inventory',
      hash: value,
    });
    setSelectedItem(value);
  };

  React.useEffect(() => {
    const type: any = router.asPath.split('#')[1];
    if (type) setSelectedItem(type);
  }, [router.asPath]);

  const inventoryMenu = [
    { id: 1, name: 'My listing', value: 'listing' },
    { id: 2, name: 'Inventory', value: '' },
    { id: 3, name: 'Mystery box', value: 'mystery-box' },
  ];

  const menu = inventoryMenu.map((item) => {
    return (
      <div
        key={item.id}
        className={`inventory__actions-item ${selectedItem === item.value ? 'actived' : ''}`}
        onClick={() => toggleSelectedItem(item.value)}
      >
        <span>{item.name}</span>
      </div>
    );
  });

  const renderChild = () => {
    switch (selectedItem) {
      case '':
        if (userWalletId) {
          return <MyInventory userWalletId={userWalletId} />;
        }
        break;
      case 'listing':
        if (userWalletId) {
          return <MyListing userWalletId={userWalletId} />;
        }
        break;
      case 'mystery-box':
        if (account) {
          return <MyBoxes account={account} />;
        }
        break;
    }

    if (!userWalletId || !account) {
      return <></>;
    }
  };

  React.useEffect(() => {
    if (!account) {
      router.push('/');
    }
  }, [account]);

  return (
    <React.Fragment>
      <CustomHead title="ultimate_player marketplace | Inventory" />
      <div className="inventory">
        <div className="inventory__actions">{menu}</div>
        <div className="inventory__result">{renderChild()}</div>
      </div>
    </React.Fragment>
  );
};

export default Inventory;
