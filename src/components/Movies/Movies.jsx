import "./Movies.css";
import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import apiMovie from "../../utils/MovieApi";
import Preloader from "../Preloader/Preloader";


const Movies = ({ handleAddMovie, handleMovieDel, handleDeleteMovies, sevMovies }) => {
  const [cards, setCards] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [shortFilmsOnly, setShortFilmsOnly] = useState(
    JSON.parse(localStorage.getItem("shortFilmsOnly")) || false
  );
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
      setCards(JSON.parse(savedMovies));
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setError(null);

      apiMovie
        .getMovieInfo()
        .then((movieData) => {
          setCards(movieData);
          localStorage.setItem("movies", JSON.stringify(movieData));
        })
        .catch((error) => {
          setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    const savedSearchText = localStorage.getItem("searchText");
    if (savedSearchText) {
      setSearchText(savedSearchText);
      setSearchPerformed(true);
    }
  }, []);

  useEffect(() => {
    const filteredMovies = cards.filter((card) => {
      const isMatchSearch =
        card.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
        card.nameEN.toLowerCase().includes(searchText.toLowerCase());

      if (shortFilmsOnly) {
        return isMatchSearch && card.duration <= 40;
      } else {
        return isMatchSearch;
      }
    });
    setFilteredMovies(filteredMovies);

    if (searchPerformed) {
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    }
  }, [searchText, cards, shortFilmsOnly, searchPerformed]);

  const handleMovies = (value) => {
    setSearchText(value);
    setSearchPerformed(true);
    localStorage.setItem("searchText", value);
  };

  const handleShortFilmsOnly = (isChecked) => {
    setShortFilmsOnly(isChecked);
    localStorage.setItem("shortFilmsOnly", JSON.stringify(isChecked));
  };

  return (
    <section className="movies">
      <SearchForm handleMovies={handleMovies} searchText={searchText} />
      <FilterCheckbox
        handleShortFilmsOnly={handleShortFilmsOnly}
        shortFilmsOnly={shortFilmsOnly}
      />
     {isLoading && !error && <Preloader />}
      {!isLoading && error && <p className="movies__error">{error}</p>}
      {!isLoading && !error && searchPerformed && filteredMovies.length === 0 && (
        <p className="movies__error">Ничего не найдено</p>
      )}
      {!isLoading && !error && searchPerformed && filteredMovies.length > 0 && (
        <MoviesCardList cards={filteredMovies} handleAddMovie={handleAddMovie} handleDeleteMovies={handleDeleteMovies} handleMovieDel={handleMovieDel} sevMovies={sevMovies}/>
      )}
    </section>
  );
}

export default Movies;
