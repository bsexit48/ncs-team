import * as React from 'react';
import { useAppContext } from 'context';

import CustomCollapse from 'components/new/CustomCollapse';

interface IGemProps {
  updateFilter: (item: any, rootType: string, type: string) => void;
}

const Gem: React.FunctionComponent<IGemProps> = (props) => {
  const { updateFilter } = props;
  const [selectedGem, setSelectedGem] = React.useState<string[]>([]);
  const { gemItems } = useAppContext();
  const items = gemItems?.GemMetadatas || [];

  const toggleGem = (value: string) => {
    if (selectedGem.includes(value)) {
      const newSelectedGem = selectedGem.filter((item) => item !== value);
      setSelectedGem(newSelectedGem);
    } else {
      setSelectedGem([...selectedGem, value]);
    }
  };
  const gemElms = items.map((item, index: number) => {
    const isActive = selectedGem.includes(item.gemType);
    return (
      <React.Fragment key={index}>
        <div
          className={`marketplace-buy__filter-item ${isActive ? 'actived' : ''}`}
          onClick={() => toggleGem(item.gemType)}
        >
          {item.gemType}
        </div>
        <div
          className={`marketplace-buy__filter-item-line ${index === items.length - 1 ? 'd-none' : ''}`}
        ></div>
      </React.Fragment>
    );
  });

  React.useEffect(() => {
    updateFilter(selectedGem, 'gemMetadata', 'gemType');
  }, [selectedGem]);
  return (
    <React.Fragment>
      <CustomCollapse title="Gem">
        <div className="marketplace-buy__filter">{gemElms}</div>
      </CustomCollapse>
    </React.Fragment>
  );
};

export default Gem;
