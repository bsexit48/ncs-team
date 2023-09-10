/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
interface IViewData {
  level: number;
  rarity: string;
}

interface ITradeData {
  status: 'Success' | 'Fail';
  tokenAmount: string;
}

interface IItemInTheBoxProps {
  variant: 'gray' | 'green' | 'purple' | 'purple-blue';
  gunName: string;
  gunImage: string;
  type: 'View' | 'Trade';
  viewData?: IViewData;
  tradeData?: ITradeData;
}

const ItemInTheBox: React.FunctionComponent<IItemInTheBoxProps> = (props) => {
  return (
    <>
      <div className={`item-in-the-box item-in-the-box--${props.variant}`}>
        <div className="item-in-the-box__wrapper">
          <div className="gun-background">
            <div className={`gun-background-fill ${props.variant}`}>
              <div className="gun-image">
                <img className="img-fluid" src={props.gunImage} alt="gun2" />
              </div>
            </div>
          </div>
          <div className="gun-info">
            {props.type === 'View' ? (
              <div className="view-info">
                <div>
                  <span className="gun-level mr-1">Lv. {props.viewData?.level}</span>
                  <span className="gun-name">{props.gunName}</span>
                </div>
                <div>
                  <span className="gun-rarity mr-1">Rarity:</span>
                  <span className="gun-rarity-value">{props.viewData?.rarity}</span>
                </div>
              </div>
            ) : (
              <div className="trade-info">
                <div>
                  <span className={`gun-status mr-1 ${props.tradeData?.status.toLowerCase()}`}>
                    {props.tradeData?.status}
                  </span>
                  <span className="gun-name">{props.gunName}</span>
                </div>
                <span className="gun-token-amount">{props.tradeData?.tokenAmount} TOKEN</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemInTheBox;
