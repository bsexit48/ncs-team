import * as React from 'react';

import CustomCollapse from 'components/ultimate_player/CustomCollapse';
import CustomInputSearch from 'components/ultimate_player/CustomInputSearch';

interface ITalentFilterProps {}

const TalentFilter: React.FunctionComponent<ITalentFilterProps> = (props) => {
  return (
    <React.Fragment>
      <CustomCollapse title="Talent" isPrefix={true}>
        <CustomInputSearch placeholder={'Search talent'} />
      </CustomCollapse>
    </React.Fragment>
  );
};

export default TalentFilter;
