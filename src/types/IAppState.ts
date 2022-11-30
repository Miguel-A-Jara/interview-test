import IPokemon from './IPokemon';

interface IAppState {
  isDarkMode       : boolean;
  pokemonPage      : number;
  pokemons         : IPokemon[];
  filteredPokemons : IPokemon[];
};

export default IAppState;