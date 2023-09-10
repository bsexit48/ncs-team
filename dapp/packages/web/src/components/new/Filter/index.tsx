import * as React from 'react';

import Character from './Character';
import Gem from './Gem';
import Weapon from './Gun';
import Plugin from './Plugin';

interface IFilterProps {
  updateFilter: (item: any, rootType: string, type: string) => void;
}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  const { updateFilter } = props;
  return (
    <React.Fragment>
      <Character updateFilter={updateFilter} />
      <Gem updateFilter={updateFilter} />
      <Weapon updateFilter={updateFilter} />
      <Plugin updateFilter={updateFilter} />
    </React.Fragment>
  );
};

export default Filter;
