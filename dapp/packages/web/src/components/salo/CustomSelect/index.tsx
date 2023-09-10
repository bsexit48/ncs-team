import * as React from 'react';
import Select, { ActionMeta, components } from 'react-select';

interface ICustomSelectProps {
  options: any;
  placeholder?: string;
  onChangeOps?: (data: any) => void;
}

const DropDown = () => {
  return (
    <div className="dropdown-select">
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.24407 8.12713C6.64284 8.58759 7.35716 8.58759 7.75593 8.12713L13.3613 1.65465C13.9221 1.00701 13.4621 0 12.6053 0H1.39467C0.537918 0 0.0778675 1.00701 0.638743 1.65465L6.24407 8.12713Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDown />
    </components.DropdownIndicator>
  );
};

const CustomSelect: React.FunctionComponent<ICustomSelectProps> = (props) => {
  const { options, placeholder, onChangeOps } = props;
  const onChangeOptions = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
    onChangeOps && onChangeOps(newValue);
  };
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      color: state.isSelected ? 'var(--color-aqua)' : 'var(--color-white)',
      backgroundColor: state.isFocused ? 'transparent' : 'transparent',
      '&:hover': {
        color: 'var(--color-aqua)',
      },
      ':active': {
        backgroundColor: 'transparent',
      },
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: 'var(--color-bg-menu)',
      color: state.isHover ? 'var(--color-aqua)' : 'var(--color-white)',
      zIndex: 9999,
    }),
    menuPortal: (provided: any, state: any) => ({
      ...provided,
      zIndex: 9999,
    }),
    container: (provided: any) => ({
      ...provided,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      width: 200,
      background: 'var(--color-blue-blur-500)',
      borderRadius: '6px',
      border: 'none',
      boxShadow: 'none',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorContainer: (provided: any) => {
      return {
        ...provided,
      };
    },
    placeholder: (provided: any) => ({
      ...provided,
      color: 'var(--color-white)',
      fontFamily: 'SVN-Batman Forever Alternate, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
    }),
    singleValue: (provided: any, state: any) => {
      return { ...provided, color: 'var(--color-white)' };
    },
  };
  return (
    <Select
      styles={customStyles}
      options={options}
      components={{ DropdownIndicator }}
      onChange={onChangeOptions}
      placeholder={placeholder}
    />
  );
};

export default CustomSelect;
