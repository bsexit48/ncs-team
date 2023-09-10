// import * as React from 'react';
// import ButtonFilter from 'components/ultimate_player/ButonFilter';
// import CustomCollapse from 'components/ultimate_player/CustomCollapse';
// import { useAppContext } from 'context';
// import { fromDataToWhere, fromWhereToData, transformDataButtonFilter } from 'utils';
// import { CharacterMetadataScalarFieldEnum } from 'lib/graphQL/types';
// import { ButtonVariants } from 'utils/types';
// import { isEmpty, keys, values } from 'lodash';

// interface ICharacterFilterProps {}

// const CharacterFilter: React.FunctionComponent<ICharacterFilterProps> = (props) => {
//   const { whereListingOrders, dataHeroClass, dataHeroRarity, updateNewWhere } = useAppContext();
//   const itemsHeroClass = dataHeroClass.data?.characterMetadatas || [];
//   const itemsHeroRarity = dataHeroRarity.data?.characterMetadatas || [];
//   // characterMetadatas
//   const query = fromWhereToData(whereListingOrders.nft?.is.characterMetadata?.is);
//   // const [query, setQuery] = React.useState(defaultQuery);
//   const defaultOptions = itemsHeroClass.map((item, index) => {
//     return transformDataButtonFilter(
//       item,
//       CharacterMetadataScalarFieldEnum.HERO_CLASS,
//       index,
//       ButtonVariants.HAS_ICON,
//     );
//   });
//   const defaultrarity = itemsHeroRarity.map((item, index) => {
//     return transformDataButtonFilter(
//       item,
//       CharacterMetadataScalarFieldEnum.HERO_RARITY,
//       index,
//       ButtonVariants.HAS_COLOR,
//     );
//   });
//   const [options, setOptions] = React.useState(defaultOptions);
//   const [rarity, setRarity] = React.useState(defaultrarity);

//   React.useEffect(() => {
//     if (!isEmpty(query[CharacterMetadataScalarFieldEnum.HERO_CLASS])) {
//       const newOptions = options.map((item) => {
//         if (query[CharacterMetadataScalarFieldEnum.HERO_CLASS].includes(item.name)) {
//           return { ...item, value: true };
//         } else {
//           return item;
//         }
//       });
//       setOptions(newOptions);
//     }
//     if (!isEmpty(query[CharacterMetadataScalarFieldEnum.HERO_RARITY])) {
//       const newRarity = rarity.map((item) => {
//         if (query[CharacterMetadataScalarFieldEnum.HERO_RARITY].includes(item.name)) {
//           return { ...item, value: true };
//         } else {
//           return item;
//         }
//       });
//       setRarity(newRarity);
//     }

//     // eslint-disable-next-line
//   }, [query]);

//   const update = (item: any) => {
//     const data: any = values(item)[0];
//     const key = keys(item)[0];
//     const keysQuery = keys(query);
//     let newQuery = query;
//     if (data.value) {
//       //Existed data
//       if (keysQuery.includes(key)) {
//         newQuery = { ...newQuery, [key]: [...values(query[key]), data.name] };
//       } else {
//         newQuery = { ...newQuery, [key]: [data.name] };
//       }
//     } else {
//       //Existed data
//       if (keysQuery.includes(key)) {
//         newQuery = { ...newQuery, [key]: values(query[key]).filter((item) => item !== data.name) };
//       }
//     }
//     const finalQuery = fromDataToWhere(newQuery);
//     updateNewWhere(finalQuery, 'characterMetadata');
//   };

//   const optionsElm = () => {
//     return options.map((item: any) => {
//       return <ButtonFilter item={item} onUpdate={update} key={item.id} />;
//     });
//   };

//   const raritiesElm = () => {
//     return rarity.map((item: any) => {
//       return <ButtonFilter item={item} onUpdate={update} key={item.id} />;
//     });
//   };

//   return (
//     <React.Fragment>
//       <CustomCollapse title="Character" isPrefix={true}>
//         <div className="d-flex justify-between align-items-center flex-wrap">{optionsElm()}</div>
//         <CustomCollapse title="Rarity" disabled={true} isNested={true}>
//           <div className="d-flex justify-between align-items-center flex-wrap">{raritiesElm()}</div>
//         </CustomCollapse>
//       </CustomCollapse>
//     </React.Fragment>
//   );
// };

// export default CharacterFilter;

import * as React from 'react';

interface ICharacterFilterProps {}

const CharacterFilter: React.FunctionComponent<ICharacterFilterProps> = (props) => {
  return <React.Fragment></React.Fragment>;
};

export default CharacterFilter;
