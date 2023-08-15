import "./Login.css";
import logo from "../../images/logo.svg";
import { Link} from "react-router-dom";
import useFormAndValidation from "../../hooks/UseFormAndValidation";

const Login = ({ onLogin, webError }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values.email, values.password);
    resetForm();
  }

  return (
    <section className="login">
      <Link to="/" className="login__logo"><img src={logo} alt="Логотип онлайн кинотеатра"/></Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" name="login" onSubmit={handleSubmit} noValidate>
        <label className="login__label">E-mail</label>
        <input className="login__input" name="email" value={values.email || ''} onChange={handleChange} pattern="^[\w]+@[a-z]+\.[a-z]{2,4}$" id="email-login" type="email" placeholder="E-mail" required />
        <span className="login__error email-input-error">{errors.email}</span>
        
        <label className="login__label">Пароль</label>
        <input className="login__input" name="password" value={values.password || ''} onChange={handleChange} id="password-login" type="password" placeholder="Пароль" minLength="3" maxLength="30" required />
        <span className="login__error password-input-error">{errors.password}</span>
        
        <span className="login__error-server">{webError}</span>

        <div className="login__button-container">
          <button className="login__button" type="submit" disabled={!isValid}>Войти</button>
          <p className="login__text">Ещё не зарегистрированы?&nbsp;<Link to="/signup" className="login__text-link">Регистрация</Link></p>
        </div>
      </form>
    </section>
    )
  }
  
export default Login;