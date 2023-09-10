import config from 'config';
import { Token__factory } from 'contracts/factories/Token__factory';
import { Token } from 'contracts/Token';
import { BigNumber, BigNumberish, ContractTransaction } from 'ethers';

import { useContractFactory } from './useGetSignerOrProvider';

export const useToken = (): {
  getContractToken: () => Promise<Token>;
  getBalanceToken: (address: string) => Promise<BigNumber>;
  approveToken: (spender: string, amount: BigNumberish) => Promise<ContractTransaction>;
} => {
  const { getSignerOrProvider } = useContractFactory();

  const getContractToken = async (): Promise<Token> => {
    const signerOrProvider = await getSignerOrProvider();
    const contract = Token__factory.connect(config['tokenAddress'], signerOrProvider);

    return contract;
  };

  const approveToken = async (spender: string, amount: BigNumberish): Promise<ContractTransaction> => {
    const contract = await getContractToken();
    const tx = await contract.approve(spender, amount);

    return tx;
  };

  const getBalanceToken = async (address: string): Promise<BigNumber> => {
    const contract = await getContractToken();
    const balance = await contract.balanceOf(address);
    return balance;
  };

  return { getContractToken, getBalanceToken, approveToken };
};
