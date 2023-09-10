/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { ETypeBox } from 'constants/index';
import { useRouter } from 'next/router';

interface IMysteryBoxesProps {
  type: ETypeBox;
  amount: number;
}

const MysteryBoxes: React.FunctionComponent<IMysteryBoxesProps> = (props) => {
  const { type, amount } = props;
  const router = useRouter();
  const goToBoxDetail = (type: ETypeBox) => {
    router.push({
      pathname: '/box-detail',
      hash: type === ETypeBox.NORMAL ? 'normal' : 'vip',
    });
  };

  const renderBoxesElm = Array.from({ length: amount }, (v, k) => k + 1).map((item) => {
    return (
      <React.Fragment key={item}>
        <div
          className={`mystery-box ${type === ETypeBox.NORMAL ? 'blue' : 'purple'}`}
          onClick={() => goToBoxDetail(type)}
        >
          <div className="mystery-box__image">
            <img
              src={`/assets/images/mystery-${type === ETypeBox.NORMAL ? 'normal' : 'vip'}.png`}
              alt={`${type === ETypeBox.NORMAL ? 'normal' : 'vip'}`}
            />
          </div>
          <div className="mystery-box__content">Go to detail</div>
        </div>
      </React.Fragment>
    );
  });

  return <React.Fragment>{renderBoxesElm}</React.Fragment>;
};

export default MysteryBoxes;
