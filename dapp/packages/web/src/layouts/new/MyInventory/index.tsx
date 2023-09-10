import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import { isEmpty } from 'lodash';

import { NftOrderByWithRelationInput } from 'lib/graphQL/inventory';
import { SortOrder } from 'lib/graphQL/types';
import { useMyInventory } from 'lib/hooks/useMyInventory';
import ItemMKP from 'components/new/ItemMKP';
import LoadingItem from 'components/new/LoadingItem';
import CustomPagination from 'components/ultimate_player/CustomPagination';

interface IMyInventoryProps {
  userWalletId: number;
}

const DEFAULT_PAGE_SIZE = 20;
const MyInventory: React.FunctionComponent<IMyInventoryProps> = (props) => {
  const { userWalletId } = props;

  const [orderNft, setOrderNft] = React.useState<NftOrderByWithRelationInput>({
    createdAt: SortOrder.Desc,
  });

  const { loading, count, items, refetch } = useMyInventory(
    { ownerWalletId: { equals: userWalletId } },
    DEFAULT_PAGE_SIZE,
    0,
    { createdAt: SortOrder.Desc },
  );

  const renderItemsInventory = items.map((item) => {
    return (
      <React.Fragment key={`${item.id}`}>
        <ItemMKP type="inventory" itemNFT={item} />
      </React.Fragment>
    );
  });

  const renderLoadingItems = Array.from({ length: 20 }).map((i, index: number) => {
    return <LoadingItem loading={loading} key={index} />;
  });

  React.useEffect(() => {
    if (!isEmpty(orderNft)) {
      refetch({
        where: { ownerWalletId: { equals: userWalletId } },
        take: DEFAULT_PAGE_SIZE,
        skip: 0,
        orderBy: orderNft,
      });
      setCurrentPage(0);
    }
  }, [refetch, orderNft, userWalletId]);

  const [currentPage, setCurrentPage] = React.useState(0);

  const goToPage = (index: number) => {
    setCurrentPage(index);
    refetch({
      where: { ownerWalletId: { equals: userWalletId } },
      take: DEFAULT_PAGE_SIZE,
      skip: index * DEFAULT_PAGE_SIZE,
      orderBy: orderNft,
    });
  };

  return (
    <React.Fragment>
      <div className="d-flex w-100 justify-between align-items-center mb-2">
        {loading ? (
          <Skeleton width={107} />
        ) : (
          <p className="fs-14px fw-700 color-white text-batman"> {count} results </p>
        )}
      </div>
      <div className="marketplace-buy__items">
        {loading ? (
          renderLoadingItems
        ) : count !== 0 ? (
          renderItemsInventory
        ) : (
          <div className="marketplace-buy__empty">
            <img src={'/assets/images/palm-state.png'} alt="Palm" />
            <h3>Nothing found</h3>
          </div>
        )}
      </div>
      <div className="text-center mt-3">
        {count && count > DEFAULT_PAGE_SIZE && (
          <CustomPagination
            currentPage={currentPage}
            pageSize={DEFAULT_PAGE_SIZE}
            totalItems={count as number}
            gotoPage={goToPage}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default MyInventory;
