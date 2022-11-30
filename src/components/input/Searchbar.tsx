import { ChangeEvent, useContext, useState } from "react"
import { ApplicationContext } from "../../context/ApplicationContext";

const Searchbar = () => {

  const [searchText, setSearchText] = useState('');
  const { dispatch } = useContext(ApplicationContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    setSearchText(e.target.value);
    dispatch({ type: 'FIND_POKEMON', payload: e.target.value });
  }

  return (
    <>
      <input
        onChange={handleChange}
        value={searchText}
        className='dark:border-dark-500 border-light-500 dark:bg-dark-500/30 bg-light-700/30 
        dark:text-dark-300 text-light-500 font-bold text-xl p-2 text-end uppercase
        transition-all duration-300 border-4 focus:rounded-lg outline-none w-full'
      />
    </>
  )
}

export default Searchbar
