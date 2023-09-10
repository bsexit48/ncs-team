import * as React from 'react';
import { FilterOptions } from 'mockData/filters';

import ButtonFilter from 'components/ultimate_player/ButonFilter';

interface IStatusFilterProps {}

const StatusFilter: React.FunctionComponent<IStatusFilterProps> = (props) => {
  const status: any = FilterOptions[9];
  const { options } = status;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onUpdate = () => {};

  const optionsElm = () => {
    return options.map((item: any) => {
      return <ButtonFilter item={item} onUpdate={onUpdate} key={item.id} />;
    });
  };

  return (
    <React.Fragment>
      <div className="filter-container">
        <div className="filter-subtitle">Status</div>
        <div className="d-flex align-items-center flex-wrap">{optionsElm()}</div>
      </div>
    </React.Fragment>
  );
};

export default StatusFilter;
