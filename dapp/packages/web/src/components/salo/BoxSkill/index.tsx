import * as React from 'react';

export interface IItemSkill {
  imageUrl: string;
  name: string;
  description: string;
}

interface IBoxSkillProps {
  item: IItemSkill;
}

const BoxSkill: React.FunctionComponent<IBoxSkillProps> = (props) => {
  const { item } = props;
  return (
    <React.Fragment>
      <div className="box-skill">
        <div className="box-skill__content-overlay" />
        <div className="box-skill__content-wrapper">
          <div className="box-skill__image"></div>
          <div className="box-skill__content">
            <div className="content__header">
              <div className="content__header-left">{item.name}</div>
              <div className="content__header-right"></div>
            </div>
            <div className="content__description">{item.description}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BoxSkill;
