import { useGetUserWalletId, UserWalletWhereUniqueInput } from 'lib/graphQL/userWalletId';

export function useUserWalletId(where: UserWalletWhereUniqueInput) {
  const res = useGetUserWalletId({
    variables: {
      where,
    },
  });

  return {
    userWalletId: res.data?.userWallet?.id,
    ...res,
  };
}
