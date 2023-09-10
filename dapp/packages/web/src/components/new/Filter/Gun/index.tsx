import * as React from 'react';
import { useAppContext } from 'context';

import CustomCollapse from 'components/new/CustomCollapse';

interface IWeaponProps {
  updateFilter: (item: any, rootType: string, type: string) => void;
}

const Weapon: React.FunctionComponent<IWeaponProps> = (props) => {
  const { updateFilter } = props;
  const [selectedWeapon, setSelectedWeapon] = React.useState<string[]>([]);
  const { weaponItems } = useAppContext();
  const items = weaponItems?.weaponMetadatas || [];

  const toggleWeapon = (value: string) => {
    if (selectedWeapon.includes(value)) {
      const newSelectedWeapon = selectedWeapon.filter((item) => item !== value);
      setSelectedWeapon(newSelectedWeapon);
    } else {
      setSelectedWeapon([...selectedWeapon, value]);
    }
  };
  const weaponElms = items.map((item, index: number) => {
    const isActive = selectedWeapon.includes(item.gunType);
    return (
      <React.Fragment key={index}>
        <div
          className={`marketplace-buy__filter-item ${isActive ? 'actived' : ''}`}
          onClick={() => toggleWeapon(item.gunType)}
        >
          {item.gunType}
        </div>
        <div
          className={`marketplace-buy__filter-item-line ${index === items.length - 1 ? 'd-none' : ''}`}
        ></div>
      </React.Fragment>
    );
  });

  React.useEffect(() => {
    updateFilter(selectedWeapon, 'weaponMetadata', 'gunType');
  }, [selectedWeapon]);
  return (
    <React.Fragment>
      <CustomCollapse title="Gun">
        <div className="marketplace-buy__filter">{weaponElms}</div>
      </CustomCollapse>
    </React.Fragment>
  );
};

export default Weapon;
