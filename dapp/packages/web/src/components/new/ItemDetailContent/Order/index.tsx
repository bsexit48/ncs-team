import * as React from 'react';

import { SortOrder } from 'lib/graphQL/types';
import { useOrderDetail } from 'lib/hooks/useOrderDetail';
import { useTransactionHistory } from 'lib/hooks/useTransactionHistory';
import CustomHead from 'components/helpers/CustomHead';
import Loading from 'components/new/Loading';
import NftItemDetail from 'components/new/NftItemDetail';
import TransactionHistory from 'components/new/TransactionHistory';

interface IItemOrderDetailProps {
  type: 'buy' | 'inventory' | 'owner-listing';
  id: number;
}

const MAX_ROW = 7;
const ItemOrderDetail: React.FunctionComponent<IItemOrderDetailProps> = (props) => {
  const { id, type } = props;
  const { loading: loadingOrder, order } = useOrderDetail({ id });
  const transactionData = useTransactionHistory({
    where: {
      nftId: { equals: id },
    },
    take: MAX_ROW,
    skip: 0,
    orderBy: [{ startedAt: SortOrder.Desc }],
  });

  return (
    <React.Fragment>
      <CustomHead title={`ultimate_player marketplace | ${order?.nft.name}`} />
      {loadingOrder || transactionData.loading ? (
        <Loading size="large" />
      ) : (
        <React.Fragment>
          <div className="item-detail__information">
            {order && order.nft && <NftItemDetail item={order} itemNFT={order?.nft} type={type} />}
          </div>
          <div className="item-detail__transaction">
            <TransactionHistory transactionData={transactionData} maxRow={MAX_ROW} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ItemOrderDetail;
