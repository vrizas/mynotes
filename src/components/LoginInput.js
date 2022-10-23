import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loginPage } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';

function LoginInput({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { locale } = React.useContext(LocaleContext);

    function onEmailChangeHandler(event) {
        setEmail(() => event.target.value);
    }
    
    function onPasswordChangeHandler(event) {
        setPassword(() => event.target.value);
    }
    
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
                <input type="email" placeholder={loginPage[locale].emailPlaceholder} value={email} onChange={onEmailChangeHandler} required />
                <input type="password" placeholder={loginPage[locale].passwordPlaceholder} value={password} onChange={onPasswordChangeHandler} required />
            </div>
            <button>{ loginPage[locale].loginButton }</button>
        </form>
    );
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;