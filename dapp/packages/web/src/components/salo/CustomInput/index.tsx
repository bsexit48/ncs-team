/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

interface ICustomInputProps {
  onChange: (value: number) => void;
  max?: number;
}

export const blockInvalidChar = (e: any) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
const CustomInput: React.FunctionComponent<ICustomInputProps> = (props) => {
  const { onChange, max } = props;
  const [value, setValue] = React.useState('1');

  React.useEffect(() => {
    if (max === 0) {
      setValue('0');
    }
  }, [max]);

  const updateValue = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      const newValue = Number(value) + 1;
      if (max && newValue > max) return;
      setValue(`${Number(value) + 1}`);
    } else {
      if (Number(value) === 0) return;
      setValue(`${Number(value) - 1}`);
    }
  };

  const onChangeInput = (e: any) => {
    const { value } = e.target;
    if (max && value > max) {
      setValue(`${max}`);
      return;
    }
    setValue(value);
  };

  React.useEffect(() => {
    if (value) onChange(Number(value));
  }, [value, onChange]);

  return (
    <React.Fragment>
      <div className={`custom-input`}>
        <div
          className={`custom-input__icon ${Number(value) === 0 ? 'disabled' : ''}`}
          onClick={() => updateValue('down')}
        >
          <img src="/assets/images/minus.png" alt="minus" />
        </div>
        <div className="custom-input__content">
          <input
            disabled={max === 0}
            max={max}
            type="number"
            value={value}
            onChange={onChangeInput}
            onKeyDown={blockInvalidChar}
            placeholder="Enter a number"
          />
        </div>
        <div
          className={`custom-input__icon ${Number(value) === max ? 'disabled' : ''}`}
          onClick={() => updateValue('up')}
        >
          <img src="/assets/images/plus.png" alt="plus" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomInput;
