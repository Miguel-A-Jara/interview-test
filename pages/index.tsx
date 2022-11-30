import { useContext } from 'react';
import { ApplicationContext } from '../src/context/ApplicationContext';

import usePokemons from '../src/hooks/get/usePokemons';
import MainNavbar  from '../src/components/navbar/MainNavbar';
import PokemonCard from '../src/components/pokemon/PokemonCard';


const Home = () =>  {

  const { appState } = useContext(ApplicationContext)
  const pokemons = usePokemons(appState.pokemonPage);

  return (
    <>
      <MainNavbar />

      <div className='flex justify-around items-center flex-wrap gap-2'>
        {
          pokemons.map(p => (
            <PokemonCard key={p.data?.id} pokemon={p.data}/>
          ))
        }
      </div>

    </>
  )
}

export default Home;