import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useQueries } from '@tanstack/react-query';

import appGet   from '../../utils/appGet';
import IPokemon from '../../types/IPokemon';
import { ApplicationContext } from '../../context/ApplicationContext';

const BASE_URL = process.env.NEXT_PUBLIC_POKEMON_BASE_URL;

const usePokemons = (pages: number) => {

  const offset = ((pages - 1) * 20);

  const { appState, dispatch } = useContext(ApplicationContext);
  if( !BASE_URL ) throw new Error(`Pokemon's URL not specified!`);
  
  const indexerArray = new Array(20).fill(0);

  const pokemonsResponse = useQueries({
    queries: indexerArray.map((_, idx) => {

      const pokemonID = (idx + 1) + offset;

      return {
        queryKey: [`pokemonById`, pokemonID],
        queryFn: () => appGet<IPokemon>(`${BASE_URL}pokemon/${pokemonID}`)
      }
    })
  });

  useEffect(() => {
      
    const parsedPokemons: IPokemon[] = [];

    for (let i = 0; i < pokemonsResponse.length; i++) {      
      if(pokemonsResponse[i].data) {
        parsedPokemons.push(pokemonsResponse[i].data as IPokemon);
      }
    }

    dispatch({ type: 'SET_POKEMONS', payload: parsedPokemons });

  }, [offset]);

  return appState.filteredPokemons;
};

export default usePokemons;