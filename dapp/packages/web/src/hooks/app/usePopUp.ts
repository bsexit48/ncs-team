import * as React from 'react';
import { ETypeBox, ETypePopUp } from 'constants/index';
import { BigNumberish } from 'ethers';

export interface IDataModal {
  type: ETypePopUp;
  content?: string;
  amountToken?: BigNumberish;
  account?: string | null;
  address?: string;
  tokenId?: BigNumberish;
  amountBox?: number;
  typeBox?: ETypeBox;
  refetch?: () => void;
  refetchShopBox?: (value: boolean) => void;
}

const usePopUp = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [data, setData] = React.useState({} as IDataModal);
  const openModal = (data: IDataModal) => {
    setIsOpen(true);
    setData(data);
  };
  const closeModal = (type: ETypePopUp) => {
    setIsOpen(false);
    setData({ type });
  };
  return { isOpen, data, openModal, closeModal };
};

export default usePopUp;
