import { useQueries } from '@tanstack/react-query';

import appGet   from '../../utils/appGet';
import IPokemon from '../../types/IPokemon';

const BASE_URL = process.env.NEXT_PUBLIC_POKEMON_BASE_URL;

const usePokemons = (pages: number) => {
  
  const offset = (pages - 1) * 20;
  if( !BASE_URL ) throw new Error(`Pokemon's URL not specified!`);

  const indexerArray = new Array(20).fill(0);

  const pokemons = useQueries({
    queries: indexerArray.map((_, idx) => {

      const pokemonID = (idx + 1) + offset;

      return {
        queryKey: [`pokemonById`, pokemonID],
        queryFn: () => appGet<IPokemon>(`${BASE_URL}pokemon/${pokemonID}`)
      }
    })
  });

  return pokemons;
};

export default usePokemons;