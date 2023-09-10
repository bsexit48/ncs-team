import * as React from 'react';
import { useAppContext } from 'context';

import CharacterFilter from './Character';
import Heart from './Heart';
import PriceRange from './PriceRange';
// import GemFilter from './Gem';
// import GunFilter from './Gun';
// import PluginFilter from './Plugin';
// import TalentFilter from './Talent';
import TypeFilter from './Type';

interface IFilterProps {}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  // const { setDefaultWhereListingOrders } = useAppContext();
  return (
    <React.Fragment>
      <div className="filter">
        <div className="filter-container">
          <div className="d-flex justify-between align-items-center">
            <div className="filter-container__title">Filter</div>
            {/* <div className="filter-container__clear-filter" onClick={setDefaultWhereListingOrders}>
              Clear Filter
            </div> */}
            <Heart />
          </div>
        </div>
        <div className="filter-container" style={{ width: '70%' }}>
          <TypeFilter />
        </div>
        <div className="filter-container">
          <PriceRange />
        </div>
        <div className="mt-1">
          <CharacterFilter />
        </div>
        {/* <div className="mt-1">
          <GemFilter />
        </div>
        <div className="mt-1">
          <TalentFilter />
        </div>
        <div className="mt-1">
          <GunFilter />
        </div>
        <div className="mt-1 mb-1">
          <PluginFilter />
        </div> */}
        {/* <div className="mt-1 filter-container">
          <StatusFilter />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Filter;
