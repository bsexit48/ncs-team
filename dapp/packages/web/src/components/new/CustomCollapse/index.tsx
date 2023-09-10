/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Collapse } from 'react-collapse';
interface ICustomCollapseProps {
  title: string;
}

const CustomCollapse: React.FunctionComponent<ICustomCollapseProps> = (props) => {
  const { children, title } = props;
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);

  return (
    <React.Fragment>
      <div className="custom-collapse" onClick={toggle}>
        <span className="custom-collapse__text">{title}</span>
      </div>
      <Collapse isOpened={open}>
        <div className={`custom-collapse__content`}>{children}</div>
      </Collapse>
    </React.Fragment>
  );
};

export default CustomCollapse;
