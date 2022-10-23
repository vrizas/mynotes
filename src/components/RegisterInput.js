import React from 'react';
import PropTypes from 'prop-types';
import { registerPage } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const { locale } = React.useContext(LocaleContext);
    
    function onSubmitHandler(event) {
        event.preventDefault();
    
        register({
            name,
            email,
            password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className="register-input">
            <div className="register-input__input-wrapper">
                <input type="text" placeholder={registerPage[locale].namePlaceholder} value={name} onChange={onNameChange} required />
                <input type="email" placeholder={registerPage[locale].emailPlaceholder} value={email} onChange={onEmailChange} required />
                <input type="password" placeholder={registerPage[locale].passwordPlaceholder} autoComplete="current-password" value={password} onChange={onPasswordChange} required />
            </div>
            <button>{ registerPage[locale].registerButton }</button>
        </form>
    );
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired
};
 
export default RegisterInput;