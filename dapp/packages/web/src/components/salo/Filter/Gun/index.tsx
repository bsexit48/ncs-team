import * as React from 'react';
import { FilterOptions } from 'mockData/filters';

import ButtonFilter from 'components/ultimate_player/ButonFilter';
import CustomCollapse from 'components/ultimate_player/CustomCollapse';
import CustomSlider from 'components/ultimate_player/CustomSlider';
import StarRanking from 'components/ultimate_player/StarRank';

interface IGunFilterProps {}

const GunFilter: React.FunctionComponent<IGunFilterProps> = (props) => {
  const gun: any = FilterOptions[7];
  const { options, rarity, stats } = gun;
  const bulletElement = gun['Bullet-Element'];
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onUpdate = () => {};

  const renderBulletElement = () => {
    return bulletElement.map((item: any) => {
      return <ButtonFilter item={item} onUpdate={onUpdate} key={item.id} />;
    });
  };

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

  const statsElm = () => {
    return stats.map((item: any, index: number) => {
      return (
        <CustomSlider
          key={index}
          data={item.value}
          type={item.variants}
          onChange={onUpdate}
          title={item.name}
          hasCheckbox={true}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <CustomCollapse title="Gun" isPrefix={true}>
        <div className="d-flex justify-between align-items-center flex-wrap">{optionsElm()}</div>
        <CustomCollapse title="Rarity" disabled={true} isNested={true}>
          <div className="d-flex justify-between align-items-center flex-wrap">{raritiesElm()}</div>
        </CustomCollapse>
        <CustomCollapse title="Stats" isPrefix={false} isNested={true}>
          {statsElm()}
        </CustomCollapse>
        <CustomCollapse title="Bullet Element" disabled={true} isNested={true}>
          <div className="d-flex justify-between align-items-center flex-wrap mt-1">
            {renderBulletElement()}
          </div>
        </CustomCollapse>
        <CustomCollapse title="Star Rank" disabled={true} isNested={true}>
          <StarRanking value={0} maximum={6} />
        </CustomCollapse>
      </CustomCollapse>
    </React.Fragment>
  );
};

export default GunFilter;
