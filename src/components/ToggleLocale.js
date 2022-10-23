import React from 'react';
import LocaleContext from '../contexts/LocaleContext';
 
function ToggleLocale() {
    const { locale, toggleLocale } = React.useContext(LocaleContext);

    return <button onClick={toggleLocale} className="toggle-locale-button">{locale === 'id' ?  <span className="fi fi-id fis icon"></span> : <span className="fi fi-gb fis icon"></span> }</button>;
}
 
export default ToggleLocale;