import { useContext } from 'react';
import useToggleTheme from '../../../src/hooks/useToggleTheme';
import { ApplicationContext } from '../../context/ApplicationContext';

const MainNavbar = () => {

  const { toggleTheme } = useToggleTheme();
  const { appState, dispatch } = useContext(ApplicationContext);
  
  const pokemonPagination = (type: 'INC' | 'DEC') => {
    dispatch({ type: type === 'INC' ? 'INCREMENT_PAGE' : 'DECREMENT_PAGE' });
  }

  return (
    <nav 
      className='flex dark:bg-dark-500/60 bg-light-200 p-4 
      transition-colors duration-300 sticky top-0 z-10 backdrop-blur mb-10'
    >
      <button className='bg-white text-black' onClick={toggleTheme}>Toggle</button>
      
      <button className='mx-2 bg-white text-black' 
        onClick={() => pokemonPagination('INC')}
        disabled={ appState.pokemonPage === 10 }
        >
          change Page +
      </button>
      <button className='mx-2 bg-white text-black' 
        onClick={() => pokemonPagination('DEC')}
        disabled={ appState.pokemonPage === 1 }
      >
          change Page -
      </button>
      <nav>MainNavbar</nav>
    </nav>


  )
}

export default MainNavbar