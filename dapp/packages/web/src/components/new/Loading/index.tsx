import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from 'assets/images/loadingsl.json';

interface ILoadingProps {
  size: 'large' | 'small';
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  const distance = props.size === 'large' ? 72.5 : 35;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={`loading ${props.size}`}>
      <Lottie options={defaultOptions} height={distance} width={distance} />
    </div>
  );
};

export default Loading;
