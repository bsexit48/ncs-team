import { NftWhereInput, useInventory } from 'lib/graphQL/inventory';
import { OrderOrderByWithRelationInput } from 'lib/graphQL/listingOrders';
import { Scalars } from 'lib/graphQL/types';

export function useMyInventory(
  where: NftWhereInput,
  take: Scalars['Int'],
  skip: Scalars['Int'],
  orderBy: OrderOrderByWithRelationInput,
) {
  const res = useInventory({
    variables: {
      where,
      take,
      skip,
      orderBy,
    },
  });

  return {
    items: res.data?.nfts.items || [],
    count: res.data?.nfts.count,
    ...res,
  };
}
