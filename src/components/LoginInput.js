import React from 'react';
import PropTypes from 'prop-types';
import { loginPage } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const { locale } = React.useContext(LocaleContext);
    
    function onSubmitHandler(event) {
        event.preventDefault();
    
        login({
            email,
            password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className="login-input">
            <div className="login-input__input-wrapper">
                <input type="email" placeholder={loginPage[locale].emailPlaceholder} value={email} onChange={onEmailChange} required />
                <input type="password" placeholder={loginPage[locale].passwordPlaceholder} value={password} onChange={onPasswordChange} required />
            </div>
            <button>{ loginPage[locale].loginButton }</button>
        </form>
    );
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;