import * as React from 'react';
import { toast } from 'react-toastify';
import { ErrorWallet } from 'constants/index';
import { useToken } from 'hooks/contracts/useToken';
import { useWallet } from 'use-wallet';
import { formatAmountToken } from 'utils';

import { useUserWalletId } from 'lib/hooks/useUserWalletId';

const useConnectWallet = (): {
  account: string | null;
  activate: (connector: string) => void;
  deactivate: () => void;
  isConnected: boolean;
  tokenBalance: string;
  userWalletId: number | undefined;
  error: Error | null;
  refetchTokenBalance: (account: string) => void;
  status: string;
} => {
  const wallet = useWallet();
  const { error, reset, account, status } = wallet;
  const { getBalanceToken } = useToken();
  const [tokenBalance, setTokenBalance] = React.useState('0');
  const isConnected = wallet.isConnected();

  const activate = (connector: string) => {
    wallet.connect(connector);
  };
  const deactivate = () => {
    reset();
    setTokenBalance('0');
    localStorage.setItem('status', 'disconnected');
  };

  React.useEffect(() => {
    if (account) {
      localStorage.setItem('status', 'connected');
    }
  }, [account]);

  // React.useEffect(() => {
  //   if (status === 'disconnected') {
  //     localStorage.setItem('status', 'disconnected');
  //   }
  // }, [status]);

  //Handle logic auto connect as tricky
  React.useEffect(() => {
    if (localStorage.getItem('status') === 'connected') {
      activate('injected');
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (error) {
      switch (error.name) {
        case ErrorWallet.NoEthereumProviderError:
          toast.error('Please install metamask extension!');
          break;

        default:
          break;
      }
    }
  }, [error]);

  const { userWalletId } = useUserWalletId({ walletAddress: `${account}` });

  React.useEffect(() => {
    if (account) {
      getBalanceToken(account).then((res) => {
        const token = formatAmountToken(res);
        setTokenBalance(token);
      });
    }
  }, [getBalanceToken, account]);

  const refetchTokenBalance = (account: string) => {
    getBalanceToken(account).then((res) => {
      const token = formatAmountToken(res);
      setTokenBalance(token);
    });
  };

  return {
    account,
    activate,
    deactivate,
    isConnected,
    tokenBalance,
    userWalletId,
    error,
    status,
    refetchTokenBalance,
  };
};

export default useConnectWallet;
