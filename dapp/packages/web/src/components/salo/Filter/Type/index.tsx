import * as React from 'react';
import { FilterOptions } from 'mockData/filters';

import CustomSwitch from 'components/ultimate_player/CustomSwitch';

interface ITypeFilterProps {}

const TypeFilter: React.FunctionComponent<ITypeFilterProps> = (props) => {
  const isOwned = FilterOptions[1].value;
  const isYourOrder = FilterOptions[1].value;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const doNothing = () => {};

  return (
    <div className="d-flex justify-between align-items-center">
      <CustomSwitch checked={isOwned as boolean} onUpdate={doNothing} title="Owned" />
      <CustomSwitch checked={isYourOrder as boolean} onUpdate={doNothing} title="Your Order" />
    </div>
  );
};

export default TypeFilter;
