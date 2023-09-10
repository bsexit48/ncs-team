/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { CustomButtonColors, CustomButtonVariants } from 'constants/index';
interface ICustomButtonProps {
  className?: string;
  variants: CustomButtonVariants;
  color: CustomButtonColors;
  text: string;
  iconImage?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FunctionComponent<ICustomButtonProps> = (props) => {
  const { className, variants, text, onClick, color, iconImage, isActive } = props;
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <React.Fragment>
      <div
        className={`custom-new-button ${className} ${variants} ${color} ${isActive ? 'actived' : ''}`}
        onClick={handleClick}
      >
        {variants === CustomButtonVariants.TEXTED ? (
          <span>{text}</span>
        ) : (
          <>
            {iconImage && (
              <div className="mr-1">
                <img src={iconImage} alt="Icon-image" />
              </div>
            )}
            <span>{text}</span>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default CustomButton;
