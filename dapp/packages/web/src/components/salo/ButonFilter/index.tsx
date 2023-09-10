import * as React from 'react';

interface IButtonFilterProps {
  item: any;
  onUpdate: (item: any) => void;
}

const ButtonFilter: React.FunctionComponent<IButtonFilterProps> = (props) => {
  const { item } = props;
  const { name, valueColor, variants, value, valueImage, field } = item;
  const [isSelected, setSelected] = React.useState(false);
  const toggleSelect = () => {
    setSelected(!isSelected);
    props.onUpdate({ [field]: { value: !isSelected, name } });
  };

  React.useEffect(() => {
    setSelected(value);
  }, [value]);

  const renderContent = () => {
    switch (variants) {
      case 'hasIcon':
        return (
          <div className="button-filter__content">
            <div className={`content-icon`} style={{ backgroundColor: `${valueColor}` }} />
            <div className="content-detail">{name}</div>
          </div>
        );

      case 'hasColor':
        return (
          <div className="button-filter__content">
            <div className={`content-detail`} style={{ color: `${valueColor}` }}>
              {name}
            </div>
          </div>
        );

      case 'onlyIcon':
        return (
          <div className="button-filter__content">
            <img // eslint-disable-line @next/next/no-img-element
              src={valueImage}
              alt={name}
            />
          </div>
        );

      case 'hasNotColor':
        return (
          <div className="button-filter__content">
            <div className={`content-detail`}>{name}</div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className={`button-filter ${variants} ${isSelected ? 'selected' : ''}`} onClick={toggleSelect}>
      {renderContent()}
    </div>
  );
};

export default ButtonFilter;
