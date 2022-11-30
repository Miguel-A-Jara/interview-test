import { useContext } from 'react';

import Searchbar from '../input/Searchbar';
import PaginationButton from '../button/PaginationButton';
import useToggleTheme   from '../../../src/hooks/useToggleTheme';
import { ApplicationContext } from '../../context/ApplicationContext';

const MainNavbar = () => {

  const { toggleTheme } = useToggleTheme();
  const { appState, dispatch } = useContext(ApplicationContext);

  const pokemonPagination = (type: 'INC' | 'DEC') => {
    dispatch({ type: type === 'INC' ? 'INCREMENT_PAGE' : 'DECREMENT_PAGE' });
  }

  return (
    <nav 
      className='flex gap-2 lg:gap-10 dark:bg-dark-500/60 bg-light-200/60 p-2 md:p-4 
      transition-colors duration-300 sticky top-0 z-10 backdrop-blur mb-10'
    >
      <button className='bg-white text-black' onClick={toggleTheme}>Toggle</button>
      <div className='flex flex-grow justify-between gap-2'>
        <PaginationButton
          text='Prev'
          disabled={ appState.pokemonPage === 1 }
          onClick={() => pokemonPagination('DEC')}
          icon='bi bi-caret-left-fill'
        />
        <Searchbar />
        <PaginationButton
          text='Next'
          disabled={ appState.pokemonPage === 10 }
          onClick={() => pokemonPagination('INC')}
          icon='bi bi-caret-right-fill'
        />
      </div>
    </nav>
  );
};

export default MainNavbar