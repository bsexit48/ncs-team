import * as React from 'react';
import ReactSlider from 'react-slider';

interface ICustomSliderProps {
  data: number[];
  onChange: ((value: number[]) => void) | undefined;
  type: 'type-1' | 'type-2';
  hasCheckbox?: boolean;
  title?: string;
}

const CustomSlider: React.FunctionComponent<ICustomSliderProps> = (props) => {
  const { type, data, onChange, hasCheckbox, title } = props;
  const [range, setRange] = React.useState([0, 0]);
  React.useEffect(() => {
    setRange(data);
  }, [data]);

  return (
    <>
      {title && hasCheckbox ? (
        <div className="custom-silder__checkbox-title mt-1">
          <div className="container">
            <input type="checkbox" id={title} value={title} />
            <span className="checkmark"></span>
          </div>
          <label className="checkbox-title" htmlFor={title}>
            {title}
          </label>
        </div>
      ) : (
        ''
      )}
      {type === 'type-1' && (
        <div className="type-1__value">
          <div className="label text-title-linear">Price range</div>
          <div className="values">
            <div className="value-box">{range[0]}</div>
            <div className="line mx-1"></div>
            <div className="value-box">{range[range.length - 1]}</div>
            TOKEN
          </div>
        </div>
      )}
      <ReactSlider
        withTracks={true}
        className="custom__slider"
        thumbClassName={`slider__thumb ${type}`}
        trackClassName={`slider__track ${type}`}
        renderThumb={(props, state) => <div {...props}>{<div className="box-inside"></div>}</div>}
        value={range}
        onChange={(value) => {
          if (onChange) onChange(value);
          setRange(value);
        }}
        pearling
        minDistance={10}
      />
      {type === 'type-2' && (
        <div className="values mt-1">
          <div className="value-box">{range[0]}</div>
          <div className="line mx-5"></div>
          <div className="value-box">{range[range.length - 1]}</div>
        </div>
      )}
    </>
  );
};

export default CustomSlider;
