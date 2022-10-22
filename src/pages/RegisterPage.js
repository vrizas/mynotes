import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
 
function RegisterPage() {
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
                <h2 className="register-page__title">Daftar</h2>
                <RegisterInput register={onRegisterHandler} />
                <p className="register-page__login-link">Sudah memiliki akun? <Link to="/">Masuk</Link></p>
            </div>
        </section>
    );
}
 
export default RegisterPage;