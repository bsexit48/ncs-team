import * as React from 'react';
import ReactSlider from 'react-slider';

interface IPriceRangeProps {
  updatePriceRange: (range: number[], isReset?: boolean) => void;
}

const PriceRange: React.FunctionComponent<IPriceRangeProps> = (props) => {
  const { updatePriceRange } = props;
  const [valuePrice, setValuePrice] = React.useState([0, 0]);
  const toggleValue = (value: number[]) => setValuePrice(value);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const valueNumber = Number(value) > 0 ? Number(value) : 0;
    let newValue;
    if (name === 'minValue') {
      newValue = [valueNumber, valuePrice[1]];
    } else {
      newValue = [valuePrice[0], valueNumber];
    }
    toggleValue(newValue);
  };

  React.useEffect(() => {
    const minValue = valuePrice[0];
    const maxValue = valuePrice[1];
    if (maxValue - minValue > 0) {
      updatePriceRange(valuePrice);
    } else if (maxValue - minValue === 0) {
      updatePriceRange([0, 0], true);
    }
  }, [valuePrice]);

  return (
    <div className="price-range">
      <h3>Price range</h3>
      <div className="price-input">
        <div className="price-input__min">
          <input
            type="number"
            name="minValue"
            min={0}
            placeholder="00"
            value={valuePrice[0] === 0 ? '' : valuePrice[0]}
            onChange={onChangeInput}
          />
        </div>
        <span className="price-input__cross"></span>
        <div className="price-input__max">
          <input
            type="number"
            name="maxValue"
            min={0}
            placeholder="00"
            value={valuePrice[1] === 0 ? '' : valuePrice[1]}
            onChange={onChangeInput}
          />
        </div>
      </div>
      <div className="price-slider">
        <ReactSlider
          withTracks={true}
          min={0}
          max={1000}
          className="custom__slider"
          thumbClassName={`slider__thumb type-1`}
          trackClassName={`slider__track type-1`}
          renderThumb={(props, state) => <div {...props}>{<div className="box-inside"></div>}</div>}
          value={valuePrice}
          onChange={(value) => {
            toggleValue(value);
          }}
          pearling
          minDistance={1}
        />
      </div>
    </div>
  );
};

export default PriceRange;
