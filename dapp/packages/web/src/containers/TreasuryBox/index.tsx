import * as React from 'react';
import { ETypeBox } from 'constants/index';
import { useBlindBoxSell } from 'hooks/contracts/useBlindBoxSell';
import { formatAmountToken, formatData } from 'utils';

interface IContainerTreasuryBoxProps {
  refetchBoxes: boolean;
  toggleRefetch: (value: boolean) => void;
  toggleLoading: (value: boolean) => void;
  setAmountAndPriceBox: (amount: number, price: number, type: ETypeBox) => void;
}

const ContainerTreasuryBox: React.FunctionComponent<IContainerTreasuryBoxProps> = (props) => {
  const { refetchBoxes, toggleRefetch, toggleLoading, setAmountAndPriceBox, children } = props;
  const { getBoxes, getTotalPurchasedPerBox } = useBlindBoxSell();

  const getAvailableBoxes = () => {
    const promiseNormalBoxes = getBoxes(ETypeBox.NORMAL);
    const promiseTotalPurchasedNormalBoxes = getTotalPurchasedPerBox(ETypeBox.NORMAL);
    const promiseVipBoxes = getBoxes(ETypeBox.VIP);
    const promiseTotalPurchasedVipBoxes = getTotalPurchasedPerBox(ETypeBox.VIP);
    toggleLoading(true);

    Promise.all([
      promiseNormalBoxes,
      promiseTotalPurchasedNormalBoxes,
      promiseVipBoxes,
      promiseTotalPurchasedVipBoxes,
    ])
      .then(([dataNormalBoxes, dataTotalPurchasedNormalBoxes, dataVipBoxes, dataTotalPurchasedVipBoxes]) => {
        const formattedDataNormalBoxes: any = formatData(dataNormalBoxes);
        const formattedDataVipBoxes: any = formatData(dataVipBoxes);
        setAmountAndPriceBox(
          Number(formattedDataNormalBoxes.limit) - Number(dataTotalPurchasedNormalBoxes),
          Number(formatAmountToken(formattedDataNormalBoxes.price)),
          ETypeBox.NORMAL,
        );
        setAmountAndPriceBox(
          Number(formattedDataVipBoxes.limit) - Number(dataTotalPurchasedVipBoxes),
          Number(formatAmountToken(formattedDataVipBoxes.price)),
          ETypeBox.VIP,
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => toggleLoading(false));
  };

  React.useEffect(() => {
    getAvailableBoxes();
  }, []);

  React.useEffect(() => {
    if (refetchBoxes) {
      getAvailableBoxes();
      toggleRefetch(false);
    }
  }, [refetchBoxes]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default ContainerTreasuryBox;
