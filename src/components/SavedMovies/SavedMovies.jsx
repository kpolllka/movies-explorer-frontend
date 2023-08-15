import "./SavedMovies.css";
import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SavedMovies = ({ movies, handleDeleteMovies, sevMovies }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortFilmsOnly, setShortFilmsOnly] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    let filtered = movies;

    if (shortFilmsOnly) {
      filtered = filtered.filter((movie) => movie.duration <= 40);
    }

    if (searchText) {
      filtered = filtered.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
    setIsLoading(false);
  }, [shortFilmsOnly, searchText, movies]);

  const handleShortFilmsOnly = (isChecked) => {
    setShortFilmsOnly(isChecked);
  };

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  return (
    <section className="savedmovies">
      <SearchForm handleMovies={handleSearchText} searchText={searchText} />
      <FilterCheckbox handleShortFilmsOnly={handleShortFilmsOnly} />
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p className="savedmovies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
      ) : filteredMovies.length === 0 ? (
        <p className="savedmovies__error">Ничего не найдено</p>
      ) : (
        <MoviesCardList cards={filteredMovies} handleDeleteMovies={handleDeleteMovies} sevMovies={sevMovies} />
      )}
    </section>
  );
}

export default SavedMovies;