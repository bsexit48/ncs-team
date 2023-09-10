import * as React from 'react';
import { useAppContext } from 'context';

import CustomCollapse from 'components/new/CustomCollapse';

interface ICharacterProps {
  updateFilter: (item: any, rootType: string, type: string) => void;
}

const Character: React.FunctionComponent<ICharacterProps> = (props) => {
  const { updateFilter } = props;
  const [selectedCharacter, setSelectedCharacter] = React.useState<string[]>([]);
  const { characterItems } = useAppContext();
  const items = characterItems?.characterMetadatas || [];

  const toggleCharacter = (value: string) => {
    if (selectedCharacter.includes(value)) {
      const newSelectedCharacter = selectedCharacter.filter((item) => item !== value);
      setSelectedCharacter(newSelectedCharacter);
    } else {
      setSelectedCharacter([...selectedCharacter, value]);
    }
  };
  const characterElms = items.map((item, index: number) => {
    const isActive = selectedCharacter.includes(item.heroClass);
    return (
      <React.Fragment key={index}>
        <div
          className={`marketplace-buy__filter-item ${isActive ? 'actived' : ''}`}
          onClick={() => toggleCharacter(item.heroClass)}
        >
          {item.heroClass}
        </div>
        <div
          className={`marketplace-buy__filter-item-line ${index === items.length - 1 ? 'd-none' : ''}`}
        ></div>
      </React.Fragment>
    );
  });

  React.useEffect(() => {
    updateFilter(selectedCharacter, 'characterMetadata', 'heroClass');
  }, [selectedCharacter]);
  return (
    <React.Fragment>
      <CustomCollapse title="Character">
        <div className="marketplace-buy__filter">{characterElms}</div>
      </CustomCollapse>
    </React.Fragment>
  );
};

export default Character;
