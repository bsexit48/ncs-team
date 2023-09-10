/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
interface IStarRankingProps {
  value: number;
  maximum: number;
}

const StarRanking: React.FunctionComponent<IStarRankingProps> = (props) => {
  const { value, maximum } = props;
  const [arrayValue, setArrayrValue] = React.useState(Array(maximum).fill(0));
  React.useEffect(() => {
    const newArrayValue = arrayValue.map((item, index) => {
      return resolveItem(item, index, value);
    });
    setArrayrValue(newArrayValue);
    // eslint-disable-next-line
  }, [value]);

  const resolveItem = (item: number, index: number, value: number) => {
    if (index + 1 <= value) {
      item = 1;
    } else {
      item = 0;
    }
    return item;
  };

  const setNewValue = (value: number) => {
    let newArrayValue = Array(maximum).fill(0);
    if (value === 1) {
      if ((arrayValue[value] === 1 && arrayValue[value - 1] === 1) || arrayValue[value - 1] === 0) {
        newArrayValue[value - 1] = 1;
      }
    } else {
      newArrayValue = arrayValue.map((item, index) => {
        return resolveItem(item, index, value);
      });
    }
    setArrayrValue(newArrayValue);
  };

  const renderStars = () => {
    return arrayValue.map((item, index) => {
      return (
        <div
          onClick={() => {
            setNewValue(index + 1);
          }}
          key={index}
          style={{ cursor: 'pointer' }}
        >
          {item === 1 ? (
            <img width="15" height="15" src="/assets/images/star.svg" />
          ) : (
            <img width="15" height="15" src="/assets/images/star.svg" />
          )}
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-between align-items-center">{renderStars()}</div>
    </React.Fragment>
  );
};

export default StarRanking;
