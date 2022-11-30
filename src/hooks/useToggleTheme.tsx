import { useContext, useEffect } from 'react';
import { ApplicationContext } from '../../src/context/ApplicationContext';

const useToggleTheme = () => {

  const { appState, dispatch } = useContext(ApplicationContext);

  useEffect(() => {
    
    const HTML = document.querySelector('html');

    if( appState.isDarkMode ) {

      HTML?.classList.add('dark');

    } else {

      HTML?.classList.remove('dark');
    }
  }, [appState.isDarkMode]);

  const toggleTheme = () => {

    dispatch({ 
      type: appState.isDarkMode 
        ? 'SET_LIGHT_MODE' 
        : 'SET_DARK_MODE' 
    })

    localStorage.setItem('themeMode', 
      appState.isDarkMode ? 'ligth' : 'dark'
    );
  };
  
  return { toggleTheme };
}

export default useToggleTheme;
