import IAppState from '../types/IAppState';
import IPokemon  from '../types/IPokemon';

export type TReducerActions = 
  | { type: 'SET_DARK_MODE' }
  | { type: 'SET_LIGHT_MODE' }

  | { type: 'INCREMENT_PAGE' }
  | { type: 'DECREMENT_PAGE' }
  
  | { type: 'SET_POKEMONS', payload: IPokemon[] }
  | { type: 'FIND_POKEMON', payload: string };

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

    case 'SET_POKEMONS':
      return { ...state, pokemons: action.payload, filteredPokemons: action.payload }
  
    case 'FIND_POKEMON':
      const filteredPokemons: IPokemon[] = [];

      state.pokemons.forEach(p => {
        if(p.name.includes(action.payload)) filteredPokemons.push(p);
      });

      return { ...state, filteredPokemons: filteredPokemons };

    default:
      return state;
  }

};

export default applicationReducer;