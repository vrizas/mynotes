import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import { registerPage } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';
 
function RegisterPage() {
    const { locale } = React.useContext(LocaleContext);
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
        navigate('/');
        }
    }
    
    return (
        <section className="register-page">
            <div className="register-page__card">
                <h2 className="register-page__title">{ registerPage[locale].header }</h2>
                <RegisterInput register={onRegisterHandler} />
                <p className="register-page__login-link">{ registerPage[locale].registeredQuestion } <Link to="/">{ registerPage[locale].loginLink }</Link></p>
            </div>
        </section>
    );
}
 
export default RegisterPage;