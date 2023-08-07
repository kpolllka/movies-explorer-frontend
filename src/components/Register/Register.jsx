import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register (props) {
  return (
    <main>
      <section className="register">
        <Link to="/" className="register__logo"><img src={logo} alt="Логотип онлайн кинотеатра"/></Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" name="register">
          <label className="register__label">Имя</label>
          <input className="register__input" name="name" id="name-register" type="text" placeholder="Имя" minLength="2" maxLength="30" required />
          <span className="register__error name-input-error"></span>
        
          <label className="register__label">E-mail</label>
          <input className="register__input" name="email" id="email=register" type="email" placeholder="E-mail" required />
          <span className="register__error email-input-error"></span>
        
          <label className="register__label">Пароль</label>
          <input className="register__input" name="password" id="password=register" type="password" placeholder="Пароль" minLength="2" maxLength="30" required />
          <span className="register__error password-input-error">Что-то пошло не так...</span>
        
          <div className="register__button-container">
            <button className="register__button" type="submit">Зарегистрироваться</button>
            <p className="register__text">Уже зарегистрированы?&nbsp;&nbsp;<Link to="/signin" className="register__text-link">Войти</Link></p>
          </div>
        </form>
      </section>
    </main>
    )
  }
  
export default Register;