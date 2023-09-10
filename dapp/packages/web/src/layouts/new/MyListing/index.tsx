import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import { isEmpty } from 'lodash';

import { OrderOrderByWithRelationInput } from 'lib/graphQL/myListingOrders';
import { OrderStatus, SortOrder } from 'lib/graphQL/types';
import { useMyListingOrders } from 'lib/hooks/useMyListingOrders';
import ItemMKP from 'components/new/ItemMKP';
import LoadingItem from 'components/new/LoadingItem';
import CustomPagination from 'components/ultimate_player/CustomPagination';

interface IMyListingProps {
  userWalletId: number;
}

const DEFAULT_PAGE_SIZE = 20;
const MyListing: React.FunctionComponent<IMyListingProps> = (props) => {
  const { userWalletId } = props;
  const [orderByListingOrders, setOrderByListingOrders] = React.useState<OrderOrderByWithRelationInput>({
    createdAt: SortOrder.Desc,
  });
  const [currentPage, setCurrentPage] = React.useState(0);

  const { loading, count, items, refetch } = useMyListingOrders(
    {
      status: {
        equals: OrderStatus.OPEN,
      },
      sellUserWallet: {
        is: {
          id: {
            equals: userWalletId,
          },
        },
      },
    },
    DEFAULT_PAGE_SIZE,
    0,
    { createdAt: SortOrder.Desc },
  );

  const renderItemsListing = items.map((item) => {
    return (
      <React.Fragment key={`${item.id}`}>
        <ItemMKP type="owner-listing" item={item} itemNFT={item.nft} />
      </React.Fragment>
    );
  });

  const renderLoadingItems = Array.from({ length: 20 }).map((i, index: number) => {
    return <LoadingItem loading={loading} key={index} />;
  });

  React.useEffect(() => {
    if (!isEmpty(orderByListingOrders)) {
      refetch({
        where: {
          status: {
            equals: OrderStatus.OPEN,
          },
          sellUserWallet: {
            is: {
              id: {
                equals: userWalletId,
              },
            },
          },
        },
        take: DEFAULT_PAGE_SIZE,
        skip: 0,
        orderBy: orderByListingOrders,
      });
      setCurrentPage(0);
    }
  }, [refetch, userWalletId, orderByListingOrders]);

  const goToPage = (index: number) => {
    setCurrentPage(index);
    refetch({
      where: {
        status: {
          equals: OrderStatus.OPEN,
        },
        sellUserWallet: {
          is: {
            id: {
              equals: userWalletId,
            },
          },
        },
      },
      take: DEFAULT_PAGE_SIZE,
      skip: index * DEFAULT_PAGE_SIZE,
      orderBy: orderByListingOrders,
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
          renderItemsListing
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

export default MyListing;
