/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

interface ICustomTextInputProps {
  onChange: (value: number) => void;
}

export const blockInvalidChar = (e: any) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
const CustomTextInput: React.FunctionComponent<ICustomTextInputProps> = (props) => {
  const { onChange } = props;
  const [value, setValue] = React.useState('');

  const onChangeInput = (e: any) => {
    const { value } = e.target;
    setValue(value);
  };

  React.useEffect(() => {
    if (value) onChange(Number(value));
  }, [value, onChange]);

  return (
    <React.Fragment>
      <div className={`custom-input text`}>
        <div className="custom-input__content">
          <input
            min={0}
            type="number"
            value={value}
            onChange={onChangeInput}
            onKeyDown={blockInvalidChar}
            placeholder="price you want to sell"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomTextInput;
