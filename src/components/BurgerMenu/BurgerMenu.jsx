import { useState } from "react";
import "./BurgerMenu.css";
import { Link, NavLink } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const BurgerMenu = () => {
  // const links = [{ value: "Главная", href: "/", id: 0 }, { value: "Фильмы", href: "/movies", id: 1 }, { value: "Сохраненные фильмы", href: "/saved-movies", id: 2 }];
  const links = [{ value: "Главная", to: "/", id: 0 }, { value: "Фильмы", to: "/movies", id: 1 }, { value: "Сохранённые фильмы", to: "/saved-movies", id: 2 }];
  const [menuActive, setMenuActive] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  function burgerClick() {
    setMenuActive(!menuActive);
    setBurgerActive(!burgerActive);
    burgerActive ? enablePageScroll() : disablePageScroll();
  }

  return (
    <div className="burger">
      <nav className="burger__header">
        <div className={menuActive ? "burger__btn click" : "burger__btn"} onClick={burgerClick} />
      </nav>
      
      {menuActive && <div className="burger__menu-overlay" onClick={() => setMenuActive(false)} />}

      <div className={menuActive ? "burger__menu open" : "burger__menu"} onClick={() => setMenuActive(!menuActive)}>
        <div className="burger__menu-content" onClick={(evt) => evt.stopPropagation()}>
          
          {/* <nav className="burger__links-container">
            {links.map(item =>
              <a className="burger__links" href={item.href}>{item.value}</a>
            )}
          </nav > */}

          <nav className="burger__links-container">
            {links.map(item =>
              <NavLink className="burger__links" to={item.to} key={item.id}>{item.value}</NavLink>
            )}
          </nav>
          <Link className="burger__link-profile" to="/profile">Аккаунт</Link>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;