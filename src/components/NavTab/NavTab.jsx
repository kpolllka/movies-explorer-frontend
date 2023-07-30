import './NavTab.css';
import { Link, Routes, Route } from 'react-router-dom';

function NavTab(props) {
  return (      
    <nav className="navlink">
      <a href="#about-project" className="navlink__menu">О проекте</a>
      <a href="#about-technology" className="navlink__menu">Технологии</a>
      <a href="#about-student" className="navlink__menu">Студент</a>
    </nav>
  );
}

export default NavTab;