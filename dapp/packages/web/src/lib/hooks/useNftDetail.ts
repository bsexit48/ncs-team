import { NftWhereUniqueInput, useGetNftDetail } from 'lib/graphQL/nftDetail';

export function useNftDetail(where: NftWhereUniqueInput) {
  const res = useGetNftDetail({
    variables: {
      where,
    },
  });

  return {
    ...res,
    nft: res.data?.nft,
  };
}
