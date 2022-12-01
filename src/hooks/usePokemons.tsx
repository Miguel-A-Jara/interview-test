import { useContext, useEffect, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import IPokemon         from '../types/IPokemon';
import useFetchPokemons from './get/useFetchPokemons';
import { ApplicationContext } from '../context/ApplicationContext';

const usePokemons = (pages: number) => {

  const [offset, setOffset] = useState(1);
  const pokemonsResponse = useFetchPokemons(offset);
  const { dispatch } = useContext(ApplicationContext);

  useEffect(() => {
    setOffset(((pages - 1) * 20));
  }, [pages]);

  useDeepCompareEffect(() => {

    const parsedPokemons: IPokemon[] = [];

    for (let i = 0; i < pokemonsResponse.length; i++) {
      
      if(pokemonsResponse[i].data)
        parsedPokemons.push(pokemonsResponse[i].data as IPokemon);
    }

    dispatch({ type: 'SET_POKEMONS', payload: parsedPokemons });

  }, [pokemonsResponse])
};

export default usePokemons;