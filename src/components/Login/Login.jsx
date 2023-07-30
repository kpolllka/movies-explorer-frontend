import './Login.css';
import logo from '../../images/logo.svg';
import { NavLink, Link, Routes, Route } from 'react-router-dom';

function Login (props) {
  return (
    <div className="login">
      <Link to="/" className="header__logo login__logo"><img src={logo} alt="Логотип онлайн кинотеатра"/></Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" name="login">
        <label className="login__label">E-mail</label>
        <input className="login__input" name="email" id="email" type="email" placeholder="E-mail" required />
        <span className="login__error email-input-error" type="text"></span>
        <label className="login__label">Пароль</label>
        <input className="login__input" name="password" id="password" type="password" placeholder="Пароль" minLength="2" maxLength="30" required />
        <span className="login__error password-input-error" type="text"></span>
        <div className="login__button-container">
          <button className="login__button" type="submit">Войти</button>
          <p className="login__text">Ещё не зарегистрированы?&nbsp;<Link to="/signup" className="login__text-link">Регистрация</Link></p>
        </div>
      </form>
    </div>
    )
  }
  
export default Login;