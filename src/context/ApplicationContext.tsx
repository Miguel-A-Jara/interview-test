import { createContext, Dispatch } from 'react';

import IAppState from '../types/IAppState';
import { TReducerActions } from '../reducers/applicationReducer';

interface IApplicationContextState {
  appState: IAppState;
  dispatch: Dispatch<TReducerActions>;
}

export const ApplicationContext = createContext({} as IApplicationContextState);
