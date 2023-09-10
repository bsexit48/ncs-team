import * as React from 'react';
import { ETypeBox } from 'constants/index';
import { useBlindBox } from 'hooks/contracts/useBlindBox';

interface IContainerMyBoxesProps {
  account: string;
  toggleLoading: (value: boolean) => void;
  updateAmountBox: (value: number, type: ETypeBox) => void;
}

const ContainerMyBoxes: React.FunctionComponent<IContainerMyBoxesProps> = (props) => {
  const { children, account, toggleLoading, updateAmountBox } = props;
  const { getBalanceBoxes } = useBlindBox();

  const getMyBoxes = () => {
    const getMyNormalBoxes = getBalanceBoxes(account, ETypeBox.NORMAL);
    const getMyVipBoxes = getBalanceBoxes(account, ETypeBox.VIP);
    toggleLoading(true);

    Promise.all([getMyNormalBoxes, getMyVipBoxes])
      .then(([dataNormalBoxes, dataVipBoxes]) => {
        updateAmountBox(dataNormalBoxes.toNumber(), ETypeBox.NORMAL);
        updateAmountBox(dataVipBoxes.toNumber(), ETypeBox.VIP);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => toggleLoading(false));
  };

  React.useEffect(() => {
    getMyBoxes();
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default ContainerMyBoxes;
