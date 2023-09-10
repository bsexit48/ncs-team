import config from 'config';
import { ETypeBox } from 'constants/index';
import { Blindbox } from 'contracts/Blindbox';
import { Blindbox__factory } from 'contracts/factories/Blindbox__factory';
import { BigNumber, BigNumberish, BytesLike, ContractTransaction } from 'ethers';
import { validateEtherAddress } from 'utils/ether';

import { useContractFactory } from './useGetSignerOrProvider';

export const useBlindBox = (): {
  getContract: () => Promise<Blindbox>;
  getBalanceBoxes: (account: string, typeBox: ETypeBox) => Promise<BigNumber>;
  openBox: (id: BigNumberish) => Promise<ContractTransaction>;
  approve: () => Promise<ContractTransaction>;
  transfer: (
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
  ) => Promise<ContractTransaction>;
  getUnBoxTime: () => Promise<BigNumber>;
  isApproved: (account: string) => Promise<boolean>;
} => {
  const { getSignerOrProvider } = useContractFactory();

  const getContract = async (): Promise<Blindbox> => {
    const signerOrProvider = await getSignerOrProvider();
    const contract = Blindbox__factory.connect(config['blindbox'], signerOrProvider);

    return contract;
  };

  const getBalanceBoxes = async (account: string, typeBox: ETypeBox): Promise<BigNumber> => {
    const contract = await getContract();
    const validAccount = validateEtherAddress(account);

    return contract.balanceOf(validAccount, BigNumber.from(typeBox));
  };

  const getUnBoxTime = async (): Promise<BigNumber> => {
    const contract = await getContract();
    return contract.unboxTime();
  };

  const isApproved = async (address: string): Promise<boolean> => {
    const contract = await getContract();
    return contract.isApprovedForAll(address, config['blindbox']);
  };

  const approve = async (): Promise<ContractTransaction> => {
    const contract = await getContract();
    return contract.setApprovalForAll(config['blindbox'], true);
  };

  const transfer = async (
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
  ): Promise<ContractTransaction> => {
    const contract = await getContract();
    return contract.safeTransferFrom(from, to, id, amount, data);
  };

  // const openBox = async (id: BigNumberish): Promise<BigNumber> => {
  //   const contract = await getContract();
  //   return contract.callStatic.unbox(id);
  // };

  const openBox = async (id: BigNumberish): Promise<ContractTransaction> => {
    const contract = await getContract();
    return contract.unbox(id);
  };

  return { getContract, approve, getBalanceBoxes, openBox, getUnBoxTime, transfer, isApproved };
};
