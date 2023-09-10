import { NftItem__factory } from 'contracts/factories/NftItem__factory';
import { NftItem } from 'contracts/NftItem';
import { BigNumberish, ContractTransaction } from 'ethers';
import * as ContractUtils from 'utils/contract';
import { validateEtherAddress } from 'utils/ether';

import { useContractFactory } from './useGetSignerOrProvider';

export const useNFTItem = (): {
  getContract: (contractAddress: string) => Promise<NftItem>;
  getApproved: (tokenId: BigNumberish, contractAddress: string) => Promise<string>;
  approve: (
    contractAddress: string,
    approveAddress: string,
    tokenId: BigNumberish,
  ) => Promise<ContractTransaction>;
  isApproved: (
    approverSCAddress: string,
    approvedSCAddress: string,
    tokenId: BigNumberish,
  ) => Promise<boolean>;
} => {
  const { getSignerOrProvider } = useContractFactory();

  const getContract = async (contractAddress: string): Promise<NftItem> => {
    const signerOrProvider = await getSignerOrProvider();
    const contract = NftItem__factory.connect(contractAddress, signerOrProvider);

    return contract;
  };

  const getApproved = async (tokenId: BigNumberish, contractAddress: string): Promise<string> => {
    const contract = await getContract(contractAddress);
    const approvedAddress = await contract.getApproved(tokenId);

    return approvedAddress;
  };

  const isApproved = async (
    approverSCAddress: string,
    approvedSCAddress: string,
    tokenId: BigNumberish,
  ): Promise<boolean> => {
    const approver = validateEtherAddress(approverSCAddress);
    const approved = validateEtherAddress(approvedSCAddress);
    ContractUtils.isValidTokenId(tokenId);

    const approvalSMAddress = await getApproved(tokenId, approver);

    return approvalSMAddress === approved;
  };

  const approve = async (
    contractAddress: string,
    approveAddress: string,
    tokenId: BigNumberish,
  ): Promise<ContractTransaction> => {
    const contract = await getContract(contractAddress);
    const tx = await contract.approve(approveAddress, tokenId);

    return tx;
  };

  return { getContract, getApproved, approve, isApproved };
};
