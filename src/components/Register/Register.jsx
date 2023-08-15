import "./Register.css";
import logo from "../../images/logo.svg";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import useFormAndValidation from "../../hooks/UseFormAndValidation";

const Register = ({ onRegister, webError }) => {
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values.name, values.email, values.password);
    resetForm();
  }

  useEffect(() => {
    setValues({ name: '', email: '', password: '' });  
  }, []);

  return (
    <section className="register">
      <Link to="/" className="register__logo"><img src={logo} alt="Логотип онлайн кинотеатра"/></Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" name="register" onSubmit={handleSubmit} noValidate>
        <label className="register__label">Имя</label>
        <input className="register__input" name="name" value={values.name || ''} onChange={handleChange} pattern="^[A-ZА-Яa-zа-яЁё\\-\\s]+$" id="name-register" type="text" placeholder="Имя" minLength="2" maxLength="30" required />
        <span className="register__error name-input-error">{errors.name}</span>
        
        <label className="register__label">E-mail</label>
        <input className="register__input" name="email" value={values.email || ''} onChange={handleChange} pattern="^[\w]+@[a-z]+\.[a-z]{2,4}$" id="email=register" type="email" placeholder="E-mail" required />
        <span className="register__error email-input-error">{errors.email}</span>
        
        <label className="register__label">Пароль</label>
        <input className="register__input" name="password" value={values.password || ''} onChange={handleChange} id="password=register" type="password" placeholder="Пароль" minLength="3" maxLength="30" required />
        <span className="register__error password-input-error">{errors.password}</span>

        <span className="register__error-server">{webError}</span>
        
        <div className="register__button-container">
          <button className="register__button" type="submit" disabled={!isValid}>Зарегистрироваться</button>
          <p className="register__text">Уже зарегистрированы?&nbsp;&nbsp;<Link to="/signin" className="register__text-link">Войти</Link></p>
        </div>
      </form>
    </section>
    )
  }
  
export default Register;