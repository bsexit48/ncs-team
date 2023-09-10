/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
interface ICustomInputSearchProps {
  placeholder: string;
}

const CustomInputSearch: React.FunctionComponent<ICustomInputSearchProps> = (props) => {
  const { placeholder } = props;
  return (
    <React.Fragment>
      <div className="custom-input-search">
        <div className="custom-input-search__icon">
          <img src="/assets/images/Filter/search.png" alt="search" />
        </div>
        <input className="custom-input-search__input" placeholder={placeholder} />
      </div>
    </React.Fragment>
  );
};

export default CustomInputSearch;
