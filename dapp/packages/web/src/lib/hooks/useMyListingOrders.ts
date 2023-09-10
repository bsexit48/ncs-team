import {
  OrderOrderByWithRelationInput,
  OrderWhereInput,
  useGetMyListingOrders,
} from 'lib/graphQL/myListingOrders';
import { Scalars } from 'lib/graphQL/types';

export function useMyListingOrders(
  where: OrderWhereInput,
  take: Scalars['Int'],
  skip: Scalars['Int'],
  orderBy: OrderOrderByWithRelationInput,
) {
  const res = useGetMyListingOrders({
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
