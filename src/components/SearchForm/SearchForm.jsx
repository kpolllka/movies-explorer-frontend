import "./SearchForm.css";
import {useEffect } from "react";
import useFormAndValidation from "../../hooks/UseFormAndValidation";

const SearchForm = ({ handleMovies, searchText }) => {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm({ inputValue: searchText });
  }, [resetForm, searchText]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleMovies(values.inputValue);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__form-input"
          value={values.inputValue || ""}
          onChange={handleChange}
          type="text"
          placeholder="Фильм"
          name="inputValue" 
          required
        />
        <button className="search__form-button" type="submit" disabled={!isValid}></button>
      </form>
    </section>
  );
}

export default SearchForm;