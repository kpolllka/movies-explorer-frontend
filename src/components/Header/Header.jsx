import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [LoggedIn, setLoggedIn] = useState(true);

  return (
    <header className="header">
      {!LoggedIn ? (
        <nav className="header__container">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип онлайн кинотеатра" />
          </Link>
          <div className="header__menu">
            <Link to="/signup" className="header__menu-signup">
              Регистрация
            </Link>
            <Link to="/signin" className="header__menu-signin">
              Войти
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="header__container-movies">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип онлайн кинотеатра" />
          </Link>
          <div className="header__menu-islogin">
            <div className="header__menu-movies">
              <Link to="/movies" className="header__menu-movies">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="header__menu-save-movies">
                Сохранённые фильмы
              </Link>
            </div>
            <Link to="/profile" className="header__menu-profile">
              Аккаунт
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
