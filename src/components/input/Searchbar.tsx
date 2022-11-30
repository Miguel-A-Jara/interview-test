import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ApplicationContext } from '../../context/ApplicationContext';

const Searchbar = () => {

  const [searchText, setSearchText] = useState('');
  const { appState, dispatch } = useContext(ApplicationContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    setSearchText(e.target.value);
    dispatch({ type: 'FIND_POKEMON', payload: e.target.value });
  }

  useEffect(() => {
    setSearchText('');
  }, [appState.pokemonPage]);

  return (
    <>
      <input
        onChange={handleChange}
        value={searchText}
        className='dark:border-dark-500 border-light-200 dark:bg-dark-500/30 bg-light-400/30 
        dark:text-dark-300 text-light-500 font-bold text-xl p-2 text-end uppercase
        transition-all duration-300 border-4 focus:rounded-xl outline-none w-full'
      />
    </>
  )
}

export default Searchbar
