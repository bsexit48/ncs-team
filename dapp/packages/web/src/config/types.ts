import { ChainId } from 'constants/index';

export type Configuration = {
  hostname: string;
  graphQLUrl: string;
  env: string;
  chainId: ChainId;
  chainName: string;
  nativeCurrencyName: string;
  nativeCurrencySymbol: string;
  nativeCurrencyDecimals: number;
  blockExplorerUrls: string[];
  rpc: string;
  characterAddress: string;
  gemAddress: string;
  pluginAddress: string;
  weaponAddress: string;
  creatorAddress: string;
  marketplace: string;
  blindbox: string;
  blindboxSell: string;
  tokenAddress: string;
};
