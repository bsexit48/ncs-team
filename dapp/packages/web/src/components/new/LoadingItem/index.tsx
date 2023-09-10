import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

interface ILoadingItemProps {
  loading: boolean;
}

const LoadingItem: React.FunctionComponent<ILoadingItemProps> = (props) => {
  const { loading } = props;
  return (
    <div className="loading-item">
      <div className="loading-item__image">{loading && <Skeleton width={115} height={115} />}</div>
      <div className="loading-item__price">{loading && <Skeleton width={70} height={16} />}</div>
      <div className="loading-item__line"></div>
      <div className="loading-item__stars">{loading && <Skeleton width={86} height={19} />}</div>
    </div>
  );
};

export default LoadingItem;
