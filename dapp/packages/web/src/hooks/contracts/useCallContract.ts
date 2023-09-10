import { useState } from 'react';
import { BigNumberish, ContractReceipt, ContractTransaction } from 'ethers';
import { formatData, sleep } from 'utils';

const SLEEP_SECOND = 7;
export interface ICallContract {
  send: (
    sendFunc: (...args: BigNumberish[]) => Promise<ContractTransaction>,
    ...args: BigNumberish[]
  ) => Promise<void>;
  clearSendData: () => void;
  loading: boolean;
  error: Error | null;
  tx: ContractReceipt | null;
  queryResponse: any;
}

export const useCallContract = (): ICallContract => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [tx, setTx] = useState<ContractReceipt | null>(null);
  const [queryResponse, setQueryResponse] = useState<any>(null);

  const send = async (
    sendFunc: (...args: BigNumberish[]) => Promise<ContractTransaction>,
    ...args: BigNumberish[]
  ): Promise<void> => {
    setLoading(true);
    setError(null);
    setTx(null);
    try {
      const tx: ContractTransaction = await sendFunc(...args);
      const receipt = await tx.wait();
      await sleep(SLEEP_SECOND * 1000);
      setTx(receipt);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const clearSendData = (): void => {
    setError(null);
    setTx(null);
  };

  return { send, clearSendData, loading, error, tx, queryResponse };
};
