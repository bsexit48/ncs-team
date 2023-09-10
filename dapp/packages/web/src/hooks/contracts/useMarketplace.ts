import config from 'config';
import { Marketplace } from 'contracts';
import { Marketplace__factory } from 'contracts/factories/Marketplace__factory';
import { BigNumber, BigNumberish, ContractTransaction, ethers } from 'ethers';
import * as ContractUtils from 'utils/contract';
import { validateEtherAddress } from 'utils/ether';

import { useContractFactory } from './useGetSignerOrProvider';

export const useMarketplace = (): {
  createOrder: (
    nftAddress: string,
    tokenId: number,
    currencyAddress: string,
    price: number,
    startSaleAt: number,
    expiresAt: number,
  ) => Promise<ContractTransaction>;
  getPublicationFee: (price: BigNumberish) => Promise<BigNumber>;
  cancelOrder: (nftAddress: string, tokenId: number) => Promise<ContractTransaction>;
  executeOrder: (nftAddress: string, tokenId: number) => Promise<ContractTransaction>;
} => {
  const { getSignerOrProvider } = useContractFactory();

  const getMarketplaceContract = async (): Promise<Marketplace> => {
    const signerOrProvider = await getSignerOrProvider();
    const contract = Marketplace__factory.connect(config['marketplace'], signerOrProvider);

    return contract;
  };

  const getPublicationFee = async (price: BigNumberish): Promise<BigNumber> => {
    const contract = await getMarketplaceContract();
    const fee = await contract.publicationFee();
    return fee.mul(price).div(1000);
  };

  // Create Order
  const createOrder = async (
    nftAddress: string,
    tokenId: number,
    currencyAddress: string,
    price: number,
    startSaleAt: number,
    expiresAt: number,
  ): Promise<ContractTransaction> => {
    const validTokenAddress = validateEtherAddress(nftAddress);
    ContractUtils.isValidTokenId(tokenId);
    ContractUtils.isValidPrice(`${price}`);

    const contract = await getMarketplaceContract();
    const createTransaction = await contract.createOrder(
      validTokenAddress,
      ethers.BigNumber.from(tokenId),
      currencyAddress,
      BigNumber.from(`${price}`),
      ethers.BigNumber.from(startSaleAt),
      ethers.BigNumber.from(expiresAt),
    );
    return createTransaction;
  };

  // Cancel Order
  const cancelOrder = async (nftAddress: string, tokenId: number): Promise<ContractTransaction> => {
    const validTokenAddress = validateEtherAddress(nftAddress);
    ContractUtils.isValidTokenId(tokenId);

    const contract = await getMarketplaceContract();
    const cancelTransaction = await contract.cancelOrder(validTokenAddress, ethers.BigNumber.from(tokenId));
    return cancelTransaction;
  };

  // Execute Order
  const executeOrder = async (nftAddress: string, tokenId: number): Promise<ContractTransaction> => {
    const validTokenAddress = validateEtherAddress(nftAddress);
    ContractUtils.isValidTokenId(tokenId);

    const contract = await getMarketplaceContract();
    const executeTransaction = await contract.executeOrder(validTokenAddress, ethers.BigNumber.from(tokenId));
    return executeTransaction;
  };

  return { createOrder, cancelOrder, executeOrder, getPublicationFee };
};
