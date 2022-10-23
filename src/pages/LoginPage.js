import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';
import { loginPage } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';
 
function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className="login-page">
      <div className="login-page__card">
        <h2 className="login-page__title">{ loginPage[locale].header }</h2>
        <LoginInput login={onLogin} />
        <p className="login-page__register-link">{ loginPage[locale].registeredQuestion } <Link to="/register">{ loginPage[locale].registerLink }</Link></p>
      </div>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;