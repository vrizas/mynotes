import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className="login-page">
      <div className="login-page__card">
        <h2 className="login-page__title">Masuk</h2>
        <LoginInput login={onLogin} />
        <p className="login-page__register-link">Belum memiliki akun? <Link to="/register">Daftar di sini.</Link></p>
      </div>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;