import { useCallback } from 'react';
import { Provider } from '@ethersproject/providers';
import config from 'config';
import { ethers, Signer } from 'ethers';
import { useWallet } from 'use-wallet';

export const useContractFactory = (): { getSignerOrProvider: () => Promise<Signer | Provider> } => {
  const { chainId } = useWallet();

  const getSignerOrProvider = useCallback(async () => {
    if (chainId) {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      return signer;
    } else {
      const provider = new ethers.providers.JsonRpcProvider(config.rpc, config.chainId);

      return provider;
    }
  }, [chainId]);

  return { getSignerOrProvider };
};
