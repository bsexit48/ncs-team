import * as React from 'react';
import { FilterOptions } from 'mockData/filters';

import ButtonFilter from 'components/ultimate_player/ButonFilter';
import CustomCollapse from 'components/ultimate_player/CustomCollapse';
import CustomInputSearch from 'components/ultimate_player/CustomInputSearch';
import StarRanking from 'components/ultimate_player/StarRank';

interface IPluginFilterProps {}

const PluginFilter: React.FunctionComponent<IPluginFilterProps> = (props) => {
  const plugin: any = FilterOptions[8];
  const { options } = plugin;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onUpdate = () => {};

  const optionsElm = () => {
    return options.map((item: any) => {
      return <ButtonFilter item={item} onUpdate={onUpdate} key={item.id} />;
    });
  };

  return (
    <React.Fragment>
      <CustomCollapse title="Plug-in" isPrefix={true}>
        <div className="d-flex justify-between align-items-center flex-wrap">{optionsElm()}</div>
        <CustomCollapse title="" disabled={true} isNested={true}>
          <StarRanking value={0} maximum={4} />
        </CustomCollapse>
        <CustomCollapse title="" disabled={true} isNested={true}>
          <CustomInputSearch placeholder="Search plugin" />
        </CustomCollapse>
      </CustomCollapse>
    </React.Fragment>
  );
};

export default PluginFilter;
