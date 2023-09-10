import * as React from 'react';

interface IArrowProps {}

const NextArrow: React.FunctionComponent<IArrowProps> = (props) => {
  return (
    <React.Fragment>
      <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.1579 9.61761L10.1579 9.61759L2.52755 1.37394C2.52752 1.37391 2.52749 1.37387 2.52745 1.37383C2.52742 1.3738 2.52739 1.37376 2.52736 1.37373C2.41975 1.25739 2.28966 1.16338 2.14398 1.09863C1.99814 1.03381 1.84042 1 1.68038 1C1.52033 1 1.36261 1.0338 1.21677 1.09863C1.07101 1.16342 0.94085 1.25751 0.833201 1.37394C0.617469 1.60726 0.500719 1.91498 0.500719 2.23055C0.500719 2.54615 0.617485 2.85389 0.833247 3.0872L0.833435 3.08741L7.69455 10.4985L0.833743 17.9107L10.1579 9.61761ZM10.1579 9.61761C10.3798 9.85733 10.5 10.1738 10.5 10.4985M10.1579 9.61761L10.5 10.4985M10.5 10.4985C10.5 10.8231 10.3798 11.1395 10.158 11.3792M10.5 10.4985L10.158 11.3792M10.158 11.3792C10.158 11.3793 10.1579 11.3793 10.1579 11.3793M10.158 11.3792L10.1579 11.3793M10.1579 11.3793L2.52756 19.6261L10.1579 11.3793ZM2.14398 19.9014C2.28969 19.8366 2.4198 19.7426 2.52742 19.6262L2.14398 19.9014ZM2.14398 19.9014C1.99814 19.9662 1.84043 20 1.68038 20M2.14398 19.9014L1.68038 20M1.68038 20C1.52033 20 1.36261 19.9662 1.21678 19.9014M1.68038 20L1.21678 19.9014M1.21678 19.9014C1.07125 19.8367 0.941285 19.7428 0.833743 19.6266M1.21678 19.9014L0.833743 19.6266M0.833743 19.6266C0.617218 19.3932 0.5 19.0849 0.5 18.7687C0.5 18.4526 0.617095 18.1445 0.833402 17.9111L0.833743 19.6266Z"
          fill={'var(--color-white)'}
          stroke={'var(--color-white)'}
        />
      </svg>
    </React.Fragment>
  );
};

const PrevArrow: React.FunctionComponent<IArrowProps> = (props) => {
  return (
    <React.Fragment>
      <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.842075 9.61761L0.842086 9.61759L8.47245 1.37394C8.47248 1.37391 8.47251 1.37387 8.47255 1.37383C8.47258 1.3738 8.47261 1.37376 8.47264 1.37373C8.58025 1.25739 8.71034 1.16338 8.85602 1.09863C9.00186 1.03381 9.15958 1 9.31962 1C9.47967 1 9.63739 1.0338 9.78323 1.09863C9.92899 1.16342 10.0591 1.25751 10.1668 1.37394C10.3825 1.60726 10.4993 1.91498 10.4993 2.23055C10.4993 2.54615 10.3825 2.85389 10.1668 3.0872L10.1666 3.08741L3.30545 10.4985L10.1663 17.9107L0.842075 9.61761ZM0.842075 9.61761C0.620195 9.85733 0.5 10.1738 0.5 10.4985M0.842075 9.61761L0.5 10.4985M0.5 10.4985C0.5 10.8231 0.620176 11.1395 0.842022 11.3792M0.5 10.4985L0.842022 11.3792M0.842022 11.3792C0.842039 11.3793 0.842057 11.3793 0.842075 11.3793M0.842022 11.3792L0.842075 11.3793M0.842075 11.3793L8.47244 19.6261L0.842075 11.3793ZM8.85602 19.9014C8.71031 19.8366 8.5802 19.7426 8.47258 19.6262L8.85602 19.9014ZM8.85602 19.9014C9.00186 19.9662 9.15957 20 9.31962 20M8.85602 19.9014L9.31962 20M9.31962 20C9.47967 20 9.63739 19.9662 9.78322 19.9014M9.31962 20L9.78322 19.9014M9.78322 19.9014C9.92875 19.8367 10.0587 19.7428 10.1663 19.6266M9.78322 19.9014L10.1663 19.6266M10.1663 19.6266C10.3828 19.3932 10.5 19.0849 10.5 18.7687C10.5 18.4526 10.3829 18.1445 10.1666 17.9111L10.1663 19.6266Z"
          fill={'var(--color-white)'}
          stroke={'var(--color-white)'}
        />
      </svg>
    </React.Fragment>
  );
};

export { NextArrow, PrevArrow };
