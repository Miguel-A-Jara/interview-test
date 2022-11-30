import IAppState from '../types/IAppState';

export type TReducerActions = 
  | { type: 'SET_DARK_MODE' }
  | { type: 'SET_LIGHT_MODE' };

const applicationReducer = (state: IAppState, action: TReducerActions): IAppState => {

  switch (action.type) {
    
    case 'SET_DARK_MODE':
      return { ...state, isDarkMode: true };

    case 'SET_LIGHT_MODE':
      return { ...state, isDarkMode: false };
  
    default:
      return state;
  }

};

export default applicationReducer;