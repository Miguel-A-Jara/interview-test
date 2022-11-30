import { useReducer } from 'react';

import { ApplicationContext } from './ApplicationContext';
import getUserThemePreference from '../utils/getUserThemePreference';
import applicationReducer     from '../reducers/applicationReducer';

import IAppState from '../types/IAppState';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INIT_STATE: IAppState = {
  isDarkMode: getUserThemePreference() === 'dark' ? true : false,
  pokemonPage: 1
};

const ApplicationProvider = ({ children }: Props) => {

  const [appState, dispatch] = useReducer(applicationReducer, INIT_STATE);

  return (
    <ApplicationContext.Provider value={{ appState, dispatch }}>
      { children }
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;