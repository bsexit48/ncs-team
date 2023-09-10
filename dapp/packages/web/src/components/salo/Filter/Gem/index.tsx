import * as React from 'react';
import { FilterOptions } from 'mockData/filters';

import ButtonFilter from 'components/ultimate_player/ButonFilter';
import CustomCollapse from 'components/ultimate_player/CustomCollapse';
import CustomSlider from 'components/ultimate_player/CustomSlider';

interface IGemFilterProps {}

const GemFilter: React.FunctionComponent<IGemFilterProps> = (props) => {
  const gem: any = FilterOptions[5];
  const { options, rarity, level } = gem;
  const { value: valueLevel, variants } = level;

  const [value, setValue] = React.useState([0, 0]);
  React.useEffect(() => {
    setValue(valueLevel);
  }, [valueLevel]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onUpdate = () => {};

  const optionsElm = () => {
    return options.map((item: any) => {
      return <ButtonFilter item={item} onUpdate={onUpdate} key={item.id} />;
    });
  };

  const raritiesElm = () => {
    return rarity.map((item: any) => {
      return <ButtonFilter item={item} onUpdate={onUpdate} key={item.id} />;
    });
  };

  return (
    <React.Fragment>
      <CustomCollapse title="Gem" isPrefix={true}>
        <div className="d-flex justify-between align-items-center flex-wrap">{optionsElm()}</div>
        <CustomCollapse title="Rarity" disabled={true} isNested={true}>
          <div className="d-flex justify-between align-items-center flex-wrap">{raritiesElm()}</div>
        </CustomCollapse>
        <CustomCollapse title="Level" disabled={true} isNested={true}>
          <CustomSlider data={value} type={variants} onChange={onUpdate} />
        </CustomCollapse>
      </CustomCollapse>
    </React.Fragment>
  );
};

export default GemFilter;
