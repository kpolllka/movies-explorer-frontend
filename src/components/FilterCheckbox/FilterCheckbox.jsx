import './FilterCheckbox.css';
import { NavLink, Link, Routes, Route } from 'react-router-dom';

function FilterCheckbox(props) {
  return (
      <section className="checkbox">
        <label className="checkbox__container">
          <input className="checkbox__input" type="checkbox" />
          <span className="checkbox__style"></span>
        </label>
        <p className="checkbox__title">Короткометражки</p>
      </section>
  );
}

export default FilterCheckbox;