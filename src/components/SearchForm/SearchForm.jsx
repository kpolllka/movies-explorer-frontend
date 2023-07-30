import './SearchForm.css';
import { NavLink, Link, Routes, Route } from 'react-router-dom';

function SearchForm(props) {
  return (
    <section className="search">
      <form className="search__form" name="search-form">
        <input className="search__form-input" name="search-form-input"type="text" placeholder="Фильм" required />
        <button className="search__form-button" type="submit"></button>
      </form>
    </section>
  );
}

export default SearchForm;
