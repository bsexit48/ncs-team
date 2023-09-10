import * as React from 'react';

import { SortOrder } from 'lib/graphQL/types';
import { useNftDetail } from 'lib/hooks/useNftDetail';
import { useTransactionHistory } from 'lib/hooks/useTransactionHistory';
import CustomHead from 'components/helpers/CustomHead';
import Loading from 'components/new/Loading';
import NftItemDetail from 'components/new/NftItemDetail';
import TransactionHistory from 'components/new/TransactionHistory';

interface IItemInventoryDetailProps {
  type: 'buy' | 'inventory' | 'owner-listing';
  id: number;
}

const MAX_ROW = 7;
const ItemInventoryDetail: React.FunctionComponent<IItemInventoryDetailProps> = (props) => {
  const { id, type } = props;
  const { loading: loadingNFT, nft } = useNftDetail({ id });
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
      <CustomHead title={`ultimate_player marketplace | ${nft?.name}`} />
      {loadingNFT || transactionData.loading ? (
        <Loading size="large" />
      ) : (
        <React.Fragment>
          <div className="item-detail__information">{nft && <NftItemDetail itemNFT={nft} type={type} />}</div>
          <div className="item-detail__transaction">
            <TransactionHistory transactionData={transactionData} maxRow={MAX_ROW} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ItemInventoryDetail;
