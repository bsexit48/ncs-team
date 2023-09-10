import { Configuration } from './types';

const config: Configuration = {
  hostname: 'http://localhost:3000',
  graphQLUrl: 'https://testgraphql.ultimate_playerplayers.com/graphql',
  // graphQLUrl: 'https://market-api-staging.ultimate_playerplayers.com/graphql',
  env: 'development',
  chainId: 97,
  chainName: 'BNB Testnet',
  nativeCurrencyName: 'BNB',
  nativeCurrencySymbol: 'BNB',
  nativeCurrencyDecimals: 18,
  blockExplorerUrls: ['https://testnet.bscscan.com'],
  rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  characterAddress: '0xff77dE630773CD9eF4CB0599f5979d9460419E33',
  gemAddress: '0xcEd9bECcf8A7F95c53e5f54e1037df4AEaCBfaE7', // Fragment
  pluginAddress: '0x5f20B729A0F81F3D9aC8d6d53b408E2B3d7359d8', // Item
  weaponAddress: '0x24CCb30C8F66bc161fa179dFAa00400d5b1A5e57',
  creatorAddress: '0xB5F2C6eb6053a9b4cda4749158fd19433D69bA24',
  marketplace: '0x2E24458dA9bb2068e2F577A3EDd21C40689fA6ee',
  blindbox: '0x74698BC09bB2c45d496f8d9a8a638B758c4a8A27',
  blindboxSell: '0x7EC420cbF0cc287Ded712ED8C958d4C2e7A98A66',
  tokenAddress: '0xB63Bcc9bD1fDD103173091449905dFe5d6333142',
};

export default config;
