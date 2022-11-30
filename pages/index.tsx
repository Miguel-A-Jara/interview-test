import { useState } from "react";
import PokemonCard from "../src/components/pokemon/PokemonCard";
import usePokemons from "../src/hooks/get/usePokemons";
import useToggleTheme from "../src/hooks/useToggleTheme";

const Home = () =>  {

  const [pokemonPage, setPokemonPage] = useState(1);

  const { toggleTheme } = useToggleTheme();
  const pokemons = usePokemons(pokemonPage);


  return (
    <>
      <button className='bg-white text-black' onClick={toggleTheme}>Toggle</button>
      
      <button className='mx-2 bg-white text-black' onClick={() => setPokemonPage(prev => prev + 1)}>change Page +</button>
      <button className='mx-2 bg-white text-black' onClick={() => setPokemonPage(prev => prev - 1)}>change Page -</button>

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