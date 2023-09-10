import config from 'config';
import { BigNumber } from 'ethers';
import { flatMap, fromPairs, keys } from 'lodash';
import TokenAmount from 'token-amount';
import Web3 from 'web3';

import { CharacterMetadataScalarFieldEnum } from 'lib/graphQL/types';

import { checkValidEtherAddress } from './contract';
import { ButtonVariants, COLORS_BUTTON_FILTER, COLORS_BUTTON_FILTER_ICON } from './types';

export function shortenAddress(address: any, chars = 5) {
  if (!address) return '';

  const parsed = checkValidEtherAddress(address);
  if (!parsed) return '';
  return `${parsed.substring(0, chars)}...${parsed.substring(42 - chars)}`;
}

export function shortenTxHash(txHash: any, chars = 10) {
  if (!txHash) return '';
  return `${txHash.substring(0, chars + 2)}...${txHash.substring(50 - chars)}`;
}

export function transformDataButtonFilter(
  item: any,
  field: CharacterMetadataScalarFieldEnum,
  index: number,
  variants: ButtonVariants,
) {
  // Sample button
  // {
  //   id: '5.1',
  //   name: 'Hyper',
  //   valueColor: '#F41C24',
  //   field: 'heroClass'
  //   typeComponents: 'button',
  //   variants: 'hasIcon',
  //   value: false,
  // }

  const valueName = item[field];
  return {
    id: `${Math.floor(Math.random() * 10000000)}`,
    name: valueName,
    field,
    valueColor:
      variants === ButtonVariants.HAS_COLOR ? COLORS_BUTTON_FILTER[index] : COLORS_BUTTON_FILTER_ICON[index],
    typeComponents: 'button',
    variants,
    value: false,
  };
}

// TODO: TRANSFROM QUERY TO DATA
// INPUT: {key: {in: value}}, AND: [key: {in: value}]}
// OUTPUT: {key: value}
export function fromWhereToData(item: any) {
  const keysItem = keys(item);
  if (keysItem.length === 1) {
    // Only have one field
    return { [keysItem[0]]: item[keysItem[0]].in };
  } else if (keysItem.length > 1) {
    // Have multiple fields (must have "AND")
    const valueAND = item['AND'][0];
    const keysItemAND = keys(valueAND);
    let res = { [keysItem[0]]: item[keysItem[0]].in };
    for (let i = 0; i < keysItemAND.length; i++) {
      res = { ...res, [keysItemAND[i]]: valueAND[keysItemAND[i]].in };
    }
    return res;
  } else {
    //Empty input
    return {};
  }
}

// TODO: TRANSFROM DATA TO WHERE
// INPUT: {key: value}
// OUTPUT: {key: {in: value}}, AND: [key: {in: value}]}
export function fromDataToWhere(item: any) {
  const keysItem = keys(item);
  if (keysItem.length === 1) {
    return { [keysItem[0]]: { in: item[keysItem[0]] } };
  } else if (keysItem.length > 1) {
    const res = { [keysItem[0]]: { in: item[keysItem[0]] } };
    // Add items into AND
    let newData = {};
    for (let i = 1; i < keysItem.length; i++) {
      newData = { ...newData, ...{ [keysItem[i]]: { in: item[keysItem[i]] } } };
    }
    return { ...res, ...{ AND: newData } };
  } else {
    //Empty input
    return {};
  }
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatData(items: any) {
  const _keys = keys(items);
  const _items = flatMap(items).map((item: any) => item.toString());
  const idxToSplit = _keys.length / 2;
  const formatKeys = _keys.slice(idxToSplit);
  return fromPairs(formatKeys.map((item, index) => [item, _items[index]]));
}

export function noExponents(num: any) {
  const data = String(num).split(/[eE]/);
  if (data.length == 1) return data[0];

  let z = '';
  const sign = num < 0 ? '-' : '';
  const str = data[0].replace('.', '');
  let mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = sign + '0.';
    while (mag++) z += '0';
    return z + str.replace(/^\-/, '');
  }
  mag -= str.length;
  while (mag--) z += '0';
  return str + z;
}

export function formatAmountToken(balance: BigNumber | undefined) {
  if (!balance) return '0';
  const balanceString = noExponents(balance);
  const temp_fix = TokenAmount.format(balanceString, 18, {
    digits: 18,
  });

  // console.log(typeof temp_fix);
  return temp_fix.replace(',', '');
}

export async function getAccountAndChain() {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      const chainId = await web3.eth.net.getId();
      return { account: accounts[0], chainId: chainId };
    } catch (error) {
      // User denied account access...
      console.log('error', error);
    }
  }
  return { account: '', chainId: 0 };
}

const toHex = (num: number) => {
  return '0x' + num.toString(16);
};

export const addToNetwork = (account: string, login: () => void) => {
  const params = {
    chainId: toHex(config.chainId), // A 0x-prefixed hexadecimal string
    chainName: config.chainName,
    nativeCurrency: {
      name: config.nativeCurrencyName,
      symbol: config.nativeCurrencySymbol,
      decimals: config.nativeCurrencyDecimals,
    },
    rpcUrls: [config.rpc],
    blockExplorerUrls: config.blockExplorerUrls,
  };
  window.ethereum
    .request({
      method: 'wallet_addEthereumChain',
      params: [params, account],
    })
    .then((result: any) => {
      login();
    })
    .catch((error: any) => {
      console.log(error);
    });
};
