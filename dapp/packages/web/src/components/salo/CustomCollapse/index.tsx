/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Collapse } from 'react-collapse';
interface ICustomCollapseProps {
  title: string;
  isPrefix?: boolean;
  disabled?: boolean;
  isNested?: boolean;
}

const CustomCollapse: React.FunctionComponent<ICustomCollapseProps> = (props) => {
  const { children, title, isPrefix, disabled, isNested } = props;
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const doNothing = () => {};

  React.useEffect(() => {
    if (disabled) setOpen(true);
  }, [disabled]);

  return (
    <React.Fragment>
      <div className="custom-collapse" onClick={disabled ? doNothing : toggle}>
        {isPrefix === true && (
          <div style={open ? { transform: 'rotate(180deg)' } : {}}>
            <img src="/assets/images/collapse-icon.png" alt="collapse-icon" />
          </div>
        )}
        <span className="custom-collapse__text">{title}</span>
        {isPrefix === false && (
          <div style={open ? { transform: 'rotate(180deg)' } : {}}>
            <img src="/assets/images/collapse-icon.png" alt="collapse-icon" />
          </div>
        )}
      </div>
      <Collapse isOpened={open}>
        <div className={`custom-collapse__content ${isNested ? 'nested' : ''}`}>{children}</div>
      </Collapse>
    </React.Fragment>
  );
};

export default CustomCollapse;
