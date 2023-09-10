import {
  OrderOrderByWithRelationInput,
  OrderWhereInput,
  useGetListingOrders,
} from 'lib/graphQL/listingOrders';
import { Scalars } from 'lib/graphQL/types';

export function useListingOrders(
  where: OrderWhereInput,
  take: Scalars['Int'],
  skip: Scalars['Int'],
  orderBy: OrderOrderByWithRelationInput,
) {
  const res = useGetListingOrders({
    variables: {
      where,
      take,
      skip,
      orderBy,
    },
  });

  return {
    items: res.data?.orders.items || [],
    count: res.data?.orders.count,
    ...res,
  };
}
