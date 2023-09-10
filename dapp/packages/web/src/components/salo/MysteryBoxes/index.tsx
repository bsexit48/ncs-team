/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Countdown from 'react-countdown';
import { ETypeBox, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import dayjs from 'dayjs';
import { useBlindBox } from 'hooks/contracts/useBlindBox';
interface IMysteryBoxesProps {
  type: ETypeBox;
  account: string | null;
  updateAmountBox: (value: number) => void;
  toggleLoading: (value: boolean) => void;
  loading: boolean;
}

const MysteryBoxes: React.FunctionComponent<IMysteryBoxesProps> = (props) => {
  const { openModal } = useAppContext();
  const { type, account, toggleLoading, updateAmountBox, loading } = props;
  const typeBox = type === ETypeBox.NORMAL ? 'NORMAL' : 'VIP'; // TODO:

  const { getBalanceBoxes, getUnBoxTime } = useBlindBox();

  const [boxes, setBoxes] = React.useState<number>(0);
  const [unBoxTime, setUnBoxTime] = React.useState<number>(0);

  const [isRefetch, setIsRefetch] = React.useState(false);
  const refetch = () => setIsRefetch(true);

  React.useEffect(() => {
    if (!account || loading) return;
    toggleLoading(true);
    setIsRefetch(false);

    const promiseGetBalanceBoxes = getBalanceBoxes(account, type);
    const promiseGetUnBoxTime = getUnBoxTime();

    Promise.all([promiseGetBalanceBoxes, promiseGetUnBoxTime])
      .then(([amountBoxes, time]) => {
        setBoxes(amountBoxes.toNumber());
        updateAmountBox(amountBoxes.toNumber());
        setUnBoxTime(time.toNumber());
      })
      .finally(() => toggleLoading(false));
    // eslint-disable-next-line
  }, [type, loading, account, isRefetch]);

  const openBoxModal = () => {
    openModal({
      type: ETypePopUp.OPEN_BOX,
      typeBox: type,
      refetch,
    });
  };

  const renderer = (props: any) => {
    const { hours, minutes, seconds, completed } = props;
    if (completed) {
      return <></>;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  const doNothing = () => {
    console.log('nothing');
  };

  const canOpenBox = unBoxTime - dayjs().unix() >= 0 ? false : true;

  const renderBoxesElm = Array.from({ length: boxes }, (v, k) => k + 1).map((item) => {
    return (
      <React.Fragment key={item}>
        <div className={`mystery-box ${type === ETypeBox.NORMAL ? 'normal' : 'vip'}`}>
          <div className="mystery-box__header">{typeBox.toUpperCase()} BOX</div>
          <div className="mystery-box__content">
            <div className="content-detail">
              <div className="content-detail__image">
                <img className="img-fluid" src="/assets/images/MysteryBox/normal.png" alt={type + 'box'} />
              </div>
              <div className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum auctor scelerisque.
              </div>
              <div
                className={`content-action ${canOpenBox ? 'open' : 'disabled'}`}
                onClick={canOpenBox ? openBoxModal : doNothing}
              >
                <span>
                  OPEN
                  {canOpenBox && <Countdown date={dayjs.unix(unBoxTime).toDate()} renderer={renderer} />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <React.Fragment>{renderBoxesElm}</React.Fragment>;
};

export default MysteryBoxes;
