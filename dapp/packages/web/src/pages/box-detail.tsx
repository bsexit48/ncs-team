import * as React from 'react';
import Countdown from 'react-countdown';
import { CustomButtonVariants, ETypeBox, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import dayjs from 'dayjs';
import { useBlindBox } from 'hooks/contracts/useBlindBox';
import { last } from 'lodash';
import { useRouter } from 'next/router';

import CustomHead from 'components/helpers/CustomHead';
import CustomButton from 'components/new/CustomButton';
import Loading from 'components/new/Loading';

interface IBoxDetailProps {}

const BoxDetail: React.FunctionComponent<IBoxDetailProps> = (props) => {
  const router = useRouter();
  const { asPath } = router;
  const { openModal } = useAppContext();
  const type: any = last(asPath.split('#')) || '';

  const { getUnBoxTime } = useBlindBox();
  const [loading, setLoading] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [typeBox, setTypeBox] = React.useState('');

  React.useEffect(() => {
    if (type) {
      setTypeBox(type);
    }
  }, [type]);

  React.useEffect(() => {
    setLoading(true);
    getUnBoxTime()
      .then((time) => {
        setTime(time.toNumber());
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleOpenBox = () => {
    openModal({
      type: ETypePopUp.OPEN_BOX,
      typeBox: typeBox === 'normal' ? ETypeBox.NORMAL : ETypeBox.VIP, // TODO:
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

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <CustomHead title="ultimate_player marketplace | Box detail" />
      <CustomButton variants={CustomButtonVariants.BACK} onClick={goBack} />
      {loading ? (
        <Loading size="large" />
      ) : (
        <div className="box-detail item-nft">
          <div className="item-nft__col">
            <div className="item-nft__image-wrap">
              <div className="mt-5 text-center item-nft__image">
                <img
                  src={
                    typeBox === 'normal'
                      ? '/assets/images/MysteryBox/normal_2x.png'
                      : '/assets/images/MysteryBox/vip_package_2x.png'
                  }
                  alt="box"
                />
              </div>
            </div>

            <div className="mt-1 item-nft__purchase">
              <div className="item-nft__dark-button mb-1 text-center">
                {time - dayjs().unix() >= 0 ? (
                  <div className="d-inline-block">
                    <CustomButton
                      variants={CustomButtonVariants.DARK}
                      text={<Countdown date={dayjs.unix(time).toDate()} renderer={renderer} />}
                    />
                  </div>
                ) : (
                  <div className="d-inline-block">
                    <CustomButton variants={CustomButtonVariants.GREEN} text="open" onClick={handleOpenBox} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="item-nft__col">
            <div className="item-nft__content">
              <div className="d-flex justify-between align-items-center mt-1">
                <div className="item-title-rating">
                  <p className="fs-24px text-batman color-white fw-700">Treasure Box</p>
                </div>
              </div>
              <div className="mt-1">
                <p className="fs-16px fw-500 color-white">
                  This box content the items, weapon, charracter ..{' '}
                </p>
              </div>
              <div className="mt-2"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BoxDetail;
