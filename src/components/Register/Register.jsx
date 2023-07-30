import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register (props) {
  return (
    <div className="register">
      <Link to="/" className="header__logo register__logo"><img src={logo} alt="Логотип онлайн кинотеатра"/></Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" name="register">
        <label className="register__label">Имя</label>
        <input className="register__input" name="name" id="name" type="text" placeholder="Имя" minLength="2" maxLength="30" required />
        <span className="register__error name-input-error" type="text"></span>
        <label className="register__label">E-mail</label>
        <input className="register__input" name="email" id="email" type="email" placeholder="E-mail" required />
        <span className="register__error email-input-error" type="text"></span>
        <label className="register__label">Пароль</label>
        <input className="register__input" name="password" id="password" type="password" placeholder="Пароль" minLength="2" maxLength="30" required />
        <span className="register__error password-input-error" type="text">Что-то пошло не так...</span>
        <div className="register__button-container">
          <button className="register__button" type="submit">Зарегистрироваться</button>
          <p className="register__text">Уже зарегистрированы?&nbsp;&nbsp;<Link to="/signin" className="register__text-link">Войти</Link></p>
        </div>
      </form>
    </div>
    )
  }
  
export default Register;