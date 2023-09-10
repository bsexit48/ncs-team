import config from 'config';
import { ETypeBox } from 'constants/index';
import { BlindBoxSell } from 'contracts/BlindBoxSell';
import { BlindBoxSell__factory } from 'contracts/factories/BlindBoxSell__factory';
import { BigNumber, ContractTransaction } from 'ethers';

import { useContractFactory } from './useGetSignerOrProvider';

export type IBox = [BigNumber, BigNumber, BigNumber] & {
  amount: BigNumber;
  limit: BigNumber;
  price: BigNumber;
};
export const useBlindBoxSell = (): {
  getContract: () => Promise<BlindBoxSell>;
  getBoxes: (typeBox: ETypeBox) => Promise<IBox>;
  getTotalPurchasedPerBox: (typeBox: ETypeBox) => Promise<BigNumber>;
  buyBox: (tokenId: ETypeBox, amount: number) => Promise<ContractTransaction>;
} => {
  const { getSignerOrProvider } = useContractFactory();

  const getContract = async (): Promise<BlindBoxSell> => {
    const signerOrProvider = await getSignerOrProvider();
    const contract = BlindBoxSell__factory.connect(config['blindboxSell'], signerOrProvider);

    return contract;
  };

  const getBoxes = async (typeBox: ETypeBox): Promise<IBox> => {
    const contract = await getContract();
    return contract.boxes(typeBox);
  };

  const getTotalPurchasedPerBox = async (typeBox: ETypeBox): Promise<BigNumber> => {
    const contract = await getContract();
    return contract.totalPurchasedPerBox(`${typeBox}`);
  };

  const buyBox = async (tokenId: ETypeBox, amount: number): Promise<ContractTransaction> => {
    const contract = await getContract();
    const tx = await contract.purchase(tokenId, amount);
    return tx;
  };

  return { getContract, getBoxes, getTotalPurchasedPerBox, buyBox };
};
