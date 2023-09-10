import { Configuration } from './types';

const config: Configuration = {
  hostname: 'http://localhost:3000',
  graphQLUrl: 'https://graphql.ultimate_playerplayers.com/graphql',
  // graphQLUrl: 'https://market-api-staging.ultimate_playerplayers.com/graphql',
  env: 'production',
  chainId: 56,
  chainName: 'Binance Chain',
  nativeCurrencyName: 'BNB',
  nativeCurrencySymbol: 'BNB',
  nativeCurrencyDecimals: 18,
  blockExplorerUrls: ['https://bscscan.com'],
  rpc: 'https://bsc-dataseed.binance.org',
  characterAddress: '0xb46C10Bd9aEeA348d54C426ebcbc4A42c4460222',
  gemAddress: '0x08ACB981BA741A1fF8037945c312dDe5596A6EAc',
  pluginAddress: '0x9b0FdE42145EB85E514100134897C03B3d1091c6',
  weaponAddress: '0xe2B482C3D3F268a4314077460FB65d2eb90b3FD4',
  creatorAddress: '0xb9985799132cCa5F9639C093Ab48f73dd27A5F44',
  marketplace: '0x5059461ac6798a2F4141e684FA74F55B28959BbC',
  blindbox: '0x5dB0De61a013e044D64903E0C5E98E55A517Edd8',
  blindboxSell: '0x77F4B3C376CFDc80ed358d3134DD8C30403Af2c2',
  tokenAddress: '0x09b69fC31642020Ae53148926aAb6733703E9027',
};

export default config;
