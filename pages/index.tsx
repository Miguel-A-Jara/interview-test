import { useContext } from 'react';
import { ApplicationContext } from '../src/context/ApplicationContext';

import usePokemons from '../src/hooks/usePokemons';
import MainNavbar  from '../src/components/navbar/MainNavbar';
import PokemonCard from '../src/components/pokemon/PokemonCard';


const Home = () =>  {

  const { appState } = useContext(ApplicationContext)
  usePokemons(appState.pokemonPage);

  return (
    <>
      <MainNavbar />

      <div className='flex justify-around items-center flex-wrap gap-y-10 py-4'>
        {
          appState.filteredPokemons.map((p, idx) => (
            <PokemonCard idx={idx} key={p.id} pokemon={p}/>
          ))
        }
        {
          appState.filteredPokemons.length < 1
            ? <h1 className='dark:text-dark-400 text-light-900 text-5xl font-bold transition-colors duration-300'>
              Sorry! No pokemons to show!
            </h1>
            : null
        }
      </div>
    </>
  )
}

export default Home;