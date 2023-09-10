import * as React from 'react';

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return <div className="fs-30px fw-700 color-white">Loading...</div>;
};

export default Loading;
