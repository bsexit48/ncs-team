/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { ETypeBox } from 'constants/index';
import ContainerTreasuryBox from 'containers/TreasuryBox';

import CustomHead from 'components/helpers/CustomHead';
import Loading from 'components/new/Loading';
import TreasuryBox from 'components/new/TreasuryBox';

interface IBoxProps {}

interface IBlindBox {
  id: number;
  type: ETypeBox;
}

const boxTypes: IBlindBox[] = [
  // namnh rem
  { id: 101, type: ETypeBox.NORMAL }, // NORMAL
  // { id: 102, type: ETypeBox.VIP }, // VIP
];

const Box: React.FunctionComponent<IBoxProps> = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [amountNormalBox, setAmountNormalBox] = React.useState(0);
  const [amountVipBox, setAmountVipBox] = React.useState(0);
  const [priceNormalBox, setPriceNormalBox] = React.useState(0);
  const [priceVipBox, setPriceVipBox] = React.useState(0);

  const [refetchBoxes, setRefetchBoxes] = React.useState(false);
  const toggleRefetch = (value: boolean) => setRefetchBoxes(value);

  const toggleLoading = (value: boolean) => {
    setLoading(value);
  };

  const setAmountAndPriceBox = (amount: number, price: number, type: ETypeBox) => {
    if (type === ETypeBox.NORMAL) {
      setAmountNormalBox(amount);
      setPriceNormalBox(price);
    } else {
      setAmountVipBox(amount);
      setPriceVipBox(price);
    }
  };

  const treasuryBoxElms = boxTypes.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="box__item">
          <TreasuryBox
            type={item.type}
            toggleRefetch={toggleRefetch}
            price={item.type === ETypeBox.NORMAL ? priceNormalBox : priceVipBox}
            amount={item.type === ETypeBox.NORMAL ? amountNormalBox : amountVipBox}
          />
        </div>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <CustomHead title="ultimate_player marketplace | Treasury box" />
      <div className="box">
        <div className="box__content">
          <ContainerTreasuryBox
            refetchBoxes={refetchBoxes}
            toggleRefetch={toggleRefetch}
            toggleLoading={toggleLoading}
            setAmountAndPriceBox={setAmountAndPriceBox}
          >
            {loading ? <Loading size="large" /> : <div className="box__items">{treasuryBoxElms}</div>}
          </ContainerTreasuryBox>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Box;
