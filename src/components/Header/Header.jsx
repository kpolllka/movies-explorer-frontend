import "./Header.css";
import logo from "../../images/logo.svg";
import { NavLink, Link, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header() {
  const [LoggedIn, isLoggedIn ] = useState(true);
  
  return (
    <header className="header">
      {isLoggedIn ? (
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
          <div className="header__menu">
            <Link to="/movies" className="header__menu-movies">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__menu-save-movies">
              Сохраненные фильмы
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;

