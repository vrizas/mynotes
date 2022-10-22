import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RegisterInput({ register }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onNameChange(event) {
        setName(() => event.target.value);
    }
    
    function onEmailChange(event) {
        setEmail(() => event.target.value);
    }
    
    function onPasswordChange(event) {
        setPassword(() => event.target.value);
    }
    
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
                <input type="text" placeholder="Nama" value={name} onChange={onNameChange} required />
                <input type="email" placeholder="Email" value={email} onChange={onEmailChange} required />
                <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={onPasswordChange} required />
            </div>
            <button>Register</button>
        </form>
    );
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
 
export default RegisterInput;