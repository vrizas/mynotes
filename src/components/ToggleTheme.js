import { ThemeConsumer } from '../contexts/ThemeContext';
 
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme} className="toggle-theme-button">{theme === 'light' ?  <span className="material-icons icon icon-light">light_mode</span>: <span className="material-icons icon icon-dark">dark_mode</span>}</button>;
      }}
    </ThemeConsumer>
  );
}
 
export default ToggleTheme;