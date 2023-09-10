import { toast } from 'react-toastify';
import { utils } from 'ethers';

export const checkValidEtherAddress = (inputAddress: string) => {
  try {
    const address = utils.getAddress(inputAddress);
    return address;
  } catch (e: any) {
    toast.error(`Invalid Ethereum address [inputAddress=${inputAddress}]. ${e.message}`);
    return '';
  }
};

export const isValidTokenId = (inputTokenId: any) => {
  if (!isNaN(inputTokenId) && Number.isInteger(+inputTokenId) && inputTokenId >= 0) {
    return true;
  }
  throw Error(`Invalid Token Id [inputTokenId=${inputTokenId}]`);
};

export const isValidPrice = (price: any) => {
  if (!isNaN(price) && price >= 0) {
    return true;
  }
  throw Error(`Invalid Price [price=${price}]`);
};
