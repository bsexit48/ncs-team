import * as React from 'react';
import Switch from 'react-switch';
interface ISwitchProps {
  checked: boolean;
  title: string;
  onUpdate: () => void;
}

const CustomSwitch: React.FunctionComponent<ISwitchProps> = (props) => {
  const { checked, title } = props;
  const [isActive, setActive] = React.useState(false);
  const toggleActive = (checked: boolean, event: any) => {
    setActive(checked);
  };
  React.useEffect(() => {
    setActive(checked);
  }, [checked]);
  return (
    <>
      <div className="switch-item">
        <div className="switch-item__title">{title}</div>
        <Switch
          checkedIcon={false}
          uncheckedIcon={false}
          onHandleColor="#000000"
          offHandleColor="#000000"
          onColor="#FFFFFF"
          offColor="#FFFFFF"
          activeBoxShadow={''}
          checked={isActive}
          onChange={toggleActive}
        />
      </div>
    </>
  );
};

export default CustomSwitch;
