import * as React from 'react';

import { IAppContext } from './types';

const AppContext = React.createContext({} as IAppContext);
interface IAppContextWrapperProps {
  state: IAppContext;
}

const AppContextWrapper: React.FunctionComponent<IAppContextWrapperProps> = (props) => {
  return <AppContext.Provider value={props.state}>{props.children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return React.useContext(AppContext);
};
export default AppContextWrapper;
