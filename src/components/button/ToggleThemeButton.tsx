import { useContext } from 'react';
import useToggleTheme from '../../../src/hooks/useToggleTheme';
import { ApplicationContext } from '../../context/ApplicationContext';

const ToggleThemeButton = () => {

  const { appState } = useContext(ApplicationContext);
  const { toggleTheme } = useToggleTheme();

  return (
    <label 
      htmlFor='checked-toggle' 
      className='inline-flex items-center relative transition-all duration-300 
      dark:bg-dark-500/25 bg-light-900/25 hover:dark:bg-dark-900/50 hover:bg-light-800 
      cursor-pointer w-20 h-8 rounded-full'
    >
      <input 
        type='checkbox' 
        value=''
        id='checked-toggle' 
        className='sr-only peer'
        checked={appState.isDarkMode}
        onChange={toggleTheme}
      />

      <div className={`
        absolute ${appState.isDarkMode ? 'left-12' : 'left-0'} rounded-full w-8 h-8 transition-all duration-300
        dark:bg-dark-400 bg-light-200 dark:text-dark-900 text-light-800
        rotate-180 peer-checked:rotate-0 active:scale-90
        flex justify-center items-center text-xl`
      }>
        {
          appState.isDarkMode 
          ? <i className='w-6 h-6 flex items-center justify-center bi bi-moon' />
          : <i className='w-6 h-6 flex items-center justify-center bi bi-brightness-high' />
        }
      </div>
    </label>
  );
};

export default ToggleThemeButton;
