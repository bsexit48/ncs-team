import * as ContractUtils from './contract';

export function validateEtherAddress(address: string): string {
  const validEtherAddress = ContractUtils.checkValidEtherAddress(address);

  if (!validEtherAddress) {
    throw new Error('invalid token address');
  }

  return address;
}
