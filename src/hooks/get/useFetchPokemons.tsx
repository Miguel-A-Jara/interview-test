import { useQueries } from '@tanstack/react-query';

import IPokemon from '../../types/IPokemon';
import appGet   from '../../utils/appGet';

const indexerArray = new Array(20).fill(0);
const BASE_URL = process.env.NEXT_PUBLIC_POKEMON_BASE_URL;

const useFetchPokemons = (offset: number) => {

  if( !BASE_URL ) throw new Error(`Pokemon's URL not specified!`);

  const pokemonsResponse = useQueries({
    queries: indexerArray.map((_, idx) => {

      const pokemonID = (idx + 1) + offset;

      return {
        queryKey: [`pokemonById`, pokemonID],
        queryFn: () => appGet<IPokemon>(`${BASE_URL}pokemon/${pokemonID}`),
      }
    })
  });

  return pokemonsResponse;
}

export default useFetchPokemons;
