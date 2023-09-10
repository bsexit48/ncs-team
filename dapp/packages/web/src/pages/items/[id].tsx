/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { CustomButtonVariants } from 'constants/index';
import { useAppContext } from 'context';
import { get, last } from 'lodash';
import { useRouter } from 'next/router';

import CustomButton from 'components/new/CustomButton';
import ItemDetailContent from 'components/new/ItemDetailContent';

interface IItemDetailProps {}

const ItemDetail: React.FunctionComponent<IItemDetailProps> = (props) => {
  const router = useRouter();
  const { account } = useAppContext();

  const { query, asPath } = router;

  const id = Number(get(query, 'id', ''));
  const type: any = last(asPath.split('#')) || '';

  const goBack = () => {
    router.back();
  };

  React.useEffect(() => {
    if (!account && type !== 'buy') {
      router.push('/');
    }
  }, [account, type]);

  React.useEffect(() => {
    // First render will get shadow path (id: 0 && asPath: 'items/[id]')
    // Need to ignore them
    if ((!id && id !== 0) || !type) {
      // Missing idNFT (idOrder) or type
      router.push('/');
    }
  }, [id, type]);

  return (
    <div className="item-detail">
      <CustomButton variants={CustomButtonVariants.BACK} onClick={goBack} />
      {id && type ? (
        <div className="item-detail__content">
          <ItemDetailContent type={type} id={id} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ItemDetail;
