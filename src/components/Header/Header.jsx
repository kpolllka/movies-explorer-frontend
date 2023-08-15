import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      {!loggedIn ? (
        <nav className="header__container">
          <Link to="/" className="header__logo"><img src={logo} alt="Логотип онлайн кинотеатра" /></Link>
          <div className="header__menu">
            <Link to="/signup" className="header__menu-signup">Регистрация</Link>
            <Link to="/signin" className="header__menu-signin">Войти</Link>
          </div>
        </nav>
      ) : (
        <nav className="header__container">
          <Link to="/" className="header__logo"><img src={logo} alt="Логотип онлайн кинотеатра" /></Link>
          <div className="header__menu-islogin">
            <nav className="header__menu-container">
              <NavLink to="/movies" className="header__menu-movies">Фильмы</NavLink>
              <NavLink to="/saved-movies" className="header__menu-movies">Сохранённые фильмы</NavLink>
            </nav>
            <Link to="/profile" className="header__menu-profile">Аккаунт</Link>
          </div>
          <BurgerMenu />
        </nav>
      )}
    </header>
  );
}

export default Header;