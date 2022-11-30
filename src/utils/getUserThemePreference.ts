const getUserThemePreference = () => {

  if(global?.window ) {

    const themeMode = window.matchMedia('(prefers-color-scheme: dark)')
    .matches ? 'dark' : 'light';

    return themeMode;
  }

  return 'light';
};

export default getUserThemePreference;