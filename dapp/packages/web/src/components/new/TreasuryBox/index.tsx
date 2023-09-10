import * as React from 'react';
import { CustomButtonVariants, ETypeBox, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { ethers } from 'ethers';

import CustomButton from 'components/new/CustomButton';
import CustomInput from 'components/ultimate_player/CustomInput';

interface ITreasuryBoxProps {
  type: ETypeBox;
  price: number;
  amount: number;
  toggleRefetch: (value: boolean) => void;
}

const TreasuryBox: React.FunctionComponent<ITreasuryBoxProps> = (props) => {
  const { type, price, amount, toggleRefetch } = props;
  const { openModal } = useAppContext();

  const [valueInput, setValueInput] = React.useState(1);
  const onChangeValue = (value: number) => {
    setValueInput(value);
  };

  const openModalBuyBox = () => {
    openModal({
      type: ETypePopUp.BUY_BOX,
      content: '',
      amountBox: valueInput,
      typeBox: type,
      amountToken: ethers.utils.parseUnits(`${valueInput * price}`),
      refetchShopBox: toggleRefetch,
    });
  };

  return (
    <div className="treasury-box">
      <div className={`treasury-box__image ${type === ETypeBox.NORMAL ? 'normal' : 'vip'}`}>
        <img
          src={type === ETypeBox.NORMAL ? '/assets/images/normal.png' : '/assets/images/vip.png'}
          alt={`${type === ETypeBox.NORMAL ? 'normal-box' : 'vip-box'}`}
        />
        <div className="treasury-box__price">{price} ultimate_player</div>
      </div>
      <div className="treasury-box__input">
        <CustomInput onChange={onChangeValue} max={amount} />
      </div>
      <div className="treasury-box__actions">
        <CustomButton text="Buy now" variants={CustomButtonVariants.BUY_BOX} onClick={openModalBuyBox} />
      </div>
    </div>
  );
};

export default TreasuryBox;
