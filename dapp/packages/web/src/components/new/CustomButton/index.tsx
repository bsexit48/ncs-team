/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { CustomButtonVariants } from 'constants/index';

import Loading from 'components/new/Loading';

interface ICustomButtonProps {
  variants: CustomButtonVariants;
  loading?: boolean;
  text?: string | React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FunctionComponent<ICustomButtonProps> = (props) => {
  const { variants, text, onClick, isActive, loading } = props;
  const handleClick = () => {
    if (!onClick || loading) return;
    onClick();
  };
  return (
    <React.Fragment>
      <div className={`custom-button ${variants} ${isActive ? 'actived' : ''}`} onClick={handleClick}>
        {variants !== CustomButtonVariants.BACK && (
          <React.Fragment>
            {loading && <Loading size="small" />}
            {text && <span>{text}</span>}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default CustomButton;
