import * as React from 'react';
import { CustomButtonColors, CustomButtonVariants, ETypeBox, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { useBlindBoxSell } from 'hooks/contracts/useBlindBoxSell';
import { isEmpty } from 'lodash';
import { formatAmountToken, formatData } from 'utils';

import Loading from 'components/ultimate_player/Loading';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';

interface IShopBoxProps {
  type: ETypeBox;
  isRefetch: boolean;
  toggleRefetch: (value: boolean) => void;
}

const ShopBox: React.FunctionComponent<IShopBoxProps> = (props) => {
  const { type, isRefetch, toggleRefetch } = props;
  const { openModal } = useAppContext();
  const typeBox = type === ETypeBox.NORMAL ? 'NORMAL' : 'VIP'; // TODO:

  const [valueInput, setValueInput] = React.useState(0);
  const onChangeValue = (value: number) => {
    setValueInput(value);
  };

  const [loading, setLoading] = React.useState(false);
  const [dataBoxes, setDataBoxes] = React.useState<any>({});
  const [dataTotalPurchasedBoxes, setDataTotalPurchasedBoxes] = React.useState<number>(0);
  const [remainingBoxes, setRemainingBoxes] = React.useState<number>(0);

  const { getBoxes, getTotalPurchasedPerBox } = useBlindBoxSell();

  React.useEffect(() => {
    const getPromiseBoxes = getBoxes(type);
    const getPromiseTotalPurchasedBoxes = getTotalPurchasedPerBox(type);
    setLoading(true);
    toggleRefetch(false);

    Promise.all([getPromiseBoxes, getPromiseTotalPurchasedBoxes])
      .then(([dataBoxes, dataTotalPurchasedBoxes]) => {
        setDataBoxes(formatData(dataBoxes));
        setDataTotalPurchasedBoxes(dataTotalPurchasedBoxes.toNumber());
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [type, isRefetch]);

  React.useEffect(() => {
    if (!loading && !isEmpty(dataBoxes)) {
      const remain = Number(dataBoxes.limit) - dataTotalPurchasedBoxes;
      setRemainingBoxes(remain);
    }
  }, [loading, dataBoxes, dataTotalPurchasedBoxes]);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <svg width="100%" height="100%" viewBox="0 0 818 741" preserveAspectRatio="xMinYMin meet">
          <foreignObject width="100%" height="100%" xmlns="http://www.w3.org/1999/xhtml">
            <div className="shop__item normal">
              <h3 className="shop__item-title">{typeBox} BOX</h3>
              <div className="shop__item-img">
                <img className="img-fluid" src="/assets/images/MysteryBox/normal_2x.png" alt="normal box" />
              </div>
              <div className="d-flex w-100 justify-center align-items-center">
                <div className="shop__item-circle" />
                <div className="shop__item-price">{formatAmountToken(dataBoxes.price)} TOKEN</div>
              </div>
              <div className="d-flex justify-between align-items-center mt-2">
                <div className="shop__item-input">
                  <CustomInput onChange={onChangeValue} max={remainingBoxes} />
                </div>

                <CustomButton
                  variants={CustomButtonVariants.TRAPEZOID}
                  color={CustomButtonColors.ORANGE}
                  text="BUY NOW"
                  onClick={() => {
                    openModal({
                      type: ETypePopUp.BUY_BOX,
                      content: `${valueInput} x ${typeBox} Box`,
                      amountBox: valueInput,
                      typeBox: type,
                      amountToken: `${valueInput * dataBoxes.price}`,
                      refetchShopBox: toggleRefetch,
                    });
                  }}
                />
              </div>
            </div>
          </foreignObject>
        </svg>
      )}
    </React.Fragment>
  );
};

export default ShopBox;
