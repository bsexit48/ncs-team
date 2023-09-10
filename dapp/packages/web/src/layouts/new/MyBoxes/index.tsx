import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import { ETypeBox } from 'constants/index';
import ContainerMyBoxes from 'containers/MyBoxes';

import LoadingItem from 'components/new/LoadingItem';
import MysteryBoxes from 'components/new/MysteryBox';

interface IMyBoxesProps {
  account: string;
}

const MyBoxes: React.FunctionComponent<IMyBoxesProps> = (props) => {
  const { account } = props;
  const [amountNormalBox, seAmountNormalBox] = React.useState(0);
  const [amountVipBox, setAmountVipBox] = React.useState(0);

  const [loading, setLoading] = React.useState(false);
  const toggleLoading = (value: boolean) => setLoading(value);
  const updateAmountBox = (value: number, type: ETypeBox) => {
    if (type === ETypeBox.NORMAL) {
      seAmountNormalBox(amountNormalBox + value);
    } else {
      setAmountVipBox(amountVipBox + value);
    }
  };

  const renderLoadingItems = Array.from({ length: 20 }).map((i, index: number) => {
    return <LoadingItem loading={loading} key={index} />;
  });

  return (
    <ContainerMyBoxes account={account} toggleLoading={toggleLoading} updateAmountBox={updateAmountBox}>
      <div className="d-flex w-100 justify-between align-items-center mb-2">
        {loading ? (
          <Skeleton width={107} />
        ) : (
          <p className="fs-14px fw-700 color-white text-batman"> {amountNormalBox + amountVipBox} results </p>
        )}
      </div>
      <div className="marketplace-buy__items">
        {loading ? (
          renderLoadingItems
        ) : amountNormalBox + amountVipBox !== 0 ? (
          <React.Fragment>
            {/* namnh rem */}
            <MysteryBoxes amount={amountNormalBox} type={ETypeBox.NORMAL} />
            <MysteryBoxes amount={amountVipBox} type={ETypeBox.VIP} />
          </React.Fragment>
        ) : (
          <div className="marketplace-buy__empty">
            <img src={'/assets/images/palm-state.png'} alt="Palm" />
            <h3>Nothing found</h3>
          </div>
        )}
      </div>
    </ContainerMyBoxes>
  );
};

export default MyBoxes;
