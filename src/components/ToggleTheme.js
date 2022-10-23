import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
 
function ToggleTheme() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return <button onClick={toggleTheme} className="toggle-theme-button">{theme === 'light' ?  <span className="material-icons icon icon-light">light_mode</span>: <span className="material-icons icon icon-dark">dark_mode</span>}</button>
}
 
export default ToggleTheme;