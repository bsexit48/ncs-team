import * as React from 'react';
import { FilterOptions } from 'mockData/filters';

import CustomSlider from 'components/ultimate_player/CustomSlider';

interface IPriceRangeProps {}

const PriceRange: React.FunctionComponent<IPriceRangeProps> = (props) => {
  const priceRange: any = FilterOptions[3];
  const { value, variants } = priceRange;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const doNothing = () => {};
  return <CustomSlider data={value} type={variants} onChange={doNothing} />;
};

export default PriceRange;
