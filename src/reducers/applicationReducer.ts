import IAppState from '../types/IAppState';

export type TReducerActions = 
  | { type: 'SET_DARK_MODE' }
  | { type: 'SET_LIGHT_MODE' }
  | { type: 'INCREMENT_PAGE' }
  | { type: 'DECREMENT_PAGE' };

const applicationReducer = (state: IAppState, action: TReducerActions): IAppState => {

  switch (action.type) {
    
    case 'SET_DARK_MODE':
      return { ...state, isDarkMode: true };

    case 'SET_LIGHT_MODE':
      return { ...state, isDarkMode: false };

    case 'INCREMENT_PAGE':
      if( state.pokemonPage === 10 ) {
        return state;
      } else {
        return { ...state, pokemonPage: state.pokemonPage + 1 };
      }

    case 'DECREMENT_PAGE':
      if( state.pokemonPage === 1 ) {
        return state;
      } else {
        return { ...state, pokemonPage: state.pokemonPage - 1 };
      }
  
    default:
      return state;
  }

};

export default applicationReducer;