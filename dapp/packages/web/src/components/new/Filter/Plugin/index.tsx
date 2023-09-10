import * as React from 'react';
import { useAppContext } from 'context';

import CustomCollapse from 'components/new/CustomCollapse';

interface IPluginProps {
  updateFilter: (item: any, rootType: string, type: string) => void;
}

const Plugin: React.FunctionComponent<IPluginProps> = (props) => {
  const { updateFilter } = props;
  const [selectedPlugin, setSelectedPlugin] = React.useState<string[]>([]);
  const { pluginItems } = useAppContext();
  const items = pluginItems?.pluginMetadatas || [];

  const togglePlugin = (value: string) => {
    if (selectedPlugin.includes(value)) {
      const newSelectedPlugin = selectedPlugin.filter((item) => item !== value);
      setSelectedPlugin(newSelectedPlugin);
    } else {
      setSelectedPlugin([...selectedPlugin, value]);
    }
  };
  const pluginElms = items.map((item, index: number) => {
    const isActive = selectedPlugin.includes(item.pluginType);
    return (
      <React.Fragment key={index}>
        <div
          className={`marketplace-buy__filter-item ${isActive ? 'actived' : ''}`}
          onClick={() => togglePlugin(item.pluginType)}
        >
          {item.pluginType}
        </div>
        <div
          className={`marketplace-buy__filter-item-line ${index === items.length - 1 ? 'd-none' : ''}`}
        ></div>
      </React.Fragment>
    );
  });

  React.useEffect(() => {
    updateFilter(selectedPlugin, 'pluginMetadata', 'pluginType');
  }, [selectedPlugin]);
  return (
    <React.Fragment>
      <CustomCollapse title="Plug-in">
        <div className="marketplace-buy__filter">{pluginElms}</div>
      </CustomCollapse>
    </React.Fragment>
  );
};

export default Plugin;
