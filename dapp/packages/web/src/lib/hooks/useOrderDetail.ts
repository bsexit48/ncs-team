import { OrderWhereUniqueInput, useGetOrderDetail } from 'lib/graphQL/orderDetail';

export function useOrderDetail(where: OrderWhereUniqueInput) {
  const res = useGetOrderDetail({
    variables: {
      where,
    },
  });

  return {
    ...res,
    order: res.data?.order,
  };
}
