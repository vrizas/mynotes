import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                <input type="email" placeholder="Email" value={email} onChange={onEmailChangeHandler} required />
                <input type="password" placeholder="Password" value={password} onChange={onPasswordChangeHandler} required />
            </div>
            <button>Masuk</button>
        </form>
    );
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;