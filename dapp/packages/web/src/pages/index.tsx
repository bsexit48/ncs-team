import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import { isEmpty, omit } from 'lodash';

import { OrderOrderByWithRelationInput, OrderWhereInput } from 'lib/graphQL/listingOrders';
import { OrderStatus, SortOrder } from 'lib/graphQL/types';
import { useListingOrders } from 'lib/hooks/useListingOrders';
import CustomHead from 'components/helpers/CustomHead';
import Filter from 'components/new/Filter';
import ItemMKP from 'components/new/ItemMKP';
import LoadingItem from 'components/new/LoadingItem';
import PriceRange from 'components/new/PriceRange';
import CustomPagination from 'components/ultimate_player/CustomPagination';

interface IMarketplaceBuyProps {}

const DEFAULT_PAGE_SIZE = 20;
const MarketplaceBuy: React.FunctionComponent<IMarketplaceBuyProps> = (props) => {
  const [whereListingOrders, setWhereListingOrders] = React.useState<OrderWhereInput>({
    status: { equals: OrderStatus.OPEN },
    AND: [
      {
        expiredAt: {
          gte: 'Wed, 01 Jun 2022 02:57:46 GMT',
        },
      },
    ],
  });
  const [orderByListingOrders, setOrderByListingOrders] = React.useState<OrderOrderByWithRelationInput>({
    createdAt: SortOrder.Desc,
  });

  const [currentPage, setCurrentPage] = React.useState(0);

  const { loading, items, count, refetch } = useListingOrders(
    {
      status: { equals: OrderStatus.OPEN },
      AND: [
        {
          expiredAt: {
            gte: 'Wed, 01 Jun 2022 02:57:46 GMT',
          },
        },
      ],
    },
    DEFAULT_PAGE_SIZE,
    0,
    { createdAt: SortOrder.Desc },
  );

  const renderItemsListing = items.map((item) => {
    return (
      <React.Fragment key={`${item.id}`}>
        <ItemMKP type="buy" item={item} itemNFT={item.nft} />
      </React.Fragment>
    );
  });

  const renderLoadingItems = Array.from({ length: 20 }).map((i, index: number) => {
    return <LoadingItem loading={loading} key={index} />;
  });

  const updatePriceRange = (range: number[], isReset?: boolean) => {
    const newWhere: OrderWhereInput = isReset
      ? omit(whereListingOrders, ['sellPrice'])
      : {
          ...whereListingOrders,
          sellPrice: {
            lte: `${range[1]}`, //maxValue
            gte: `${range[0]}`, //minValue
          },
        };
    setWhereListingOrders(newWhere);
  };

  const updateFilter = (item: any, rootType: string, type: string) => {
    let newNftWhereInput;
    if (isEmpty(item)) {
      newNftWhereInput = omit(whereListingOrders.nft?.is, [`${rootType}`]);
    } else {
      newNftWhereInput = {
        ...whereListingOrders.nft?.is,
        ...{ [rootType]: { is: { [type]: { in: item } } } },
      };
    }

    const dataWhereInput = isEmpty(newNftWhereInput)
      ? omit(whereListingOrders, ['nft'])
      : {
          ...whereListingOrders,
          nft: {
            is: newNftWhereInput,
          },
        };
    setWhereListingOrders(dataWhereInput);
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
    refetch({
      where: whereListingOrders,
      take: DEFAULT_PAGE_SIZE,
      skip: index * DEFAULT_PAGE_SIZE,
      orderBy: orderByListingOrders,
    });
  };

  React.useEffect(() => {
    if (!isEmpty(whereListingOrders) && !isEmpty(orderByListingOrders)) {
      refetch({
        where: whereListingOrders,
        take: DEFAULT_PAGE_SIZE,
        skip: 0,
        orderBy: orderByListingOrders,
      });
      setCurrentPage(0);
    }
  }, [refetch, whereListingOrders, orderByListingOrders]);

  return (
    <React.Fragment>
      <CustomHead title="ultimate_player marketplace" />
      <div className="marketplace-buy">
        <div className="marketplace-buy__actions">
          {/* Price */}
          <PriceRange updatePriceRange={updatePriceRange} />
          <div className="marketplace-buy__line mt-2"></div>
          {/* Filter */}
          <Filter updateFilter={updateFilter} />
        </div>
        <div className="marketplace-buy__result">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default MarketplaceBuy;
