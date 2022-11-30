const getUserThemePreference = () => {

  if(global?.window ) {

    const chosenThemeMode = localStorage.getItem('themeMode');

    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches ? 'dark' : 'light';

    const themeMode = chosenThemeMode ? chosenThemeMode : defaultTheme;
    return themeMode;
  }

  return 'light';
};

export default getUserThemePreference;