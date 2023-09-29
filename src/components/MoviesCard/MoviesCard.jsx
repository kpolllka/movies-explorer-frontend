import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MoviesCard = ({ card, handleAddMovie, handleDeleteMovies, sevMovies, handleMovieDel }) => {
  const location = useLocation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const savedMovieIds = sevMovies.map(movie => movie.movieId);

  const isMovieSaved = () => savedMovieIds.includes(card.id);
  const cardSaveButtonClassName = `movies-card__btn-save ${isMovieSaved() ? "movies-card__btn-save_active" : ""}`;

  const del = () => {
    const savedMovie = sevMovies.find((movie) => card.id === movie.movieId);
    handleMovieDel(savedMovie._id);
  };

  const handleSaveMovie = async () => {
    if (isButtonDisabled) return;

    setIsButtonDisabled(true);

    try {
      if (isMovieSaved()) {
        await del();
      } else {
        await handleAddMovie(card);
      }
    } catch (error) {
      console.error("Ошибка при обновлении фильма:", error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const handleDeleteMovie = () => {
    handleDeleteMovies(card);
  };

  const padTo2Digits = (num) => {
    return num.toString().padStart(1, '0');
  };

  const changeduration = (totalMinutes) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${padTo2Digits(hours)}ч ${padTo2Digits(minutes)}м`;
  };
  
  return (
    <article className="movies-card">
      <div className="movies-card__img-container">
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img className="movies-card__img" src={location.pathname === '/movies' ? `https://api.nomoreparties.co${card.image.url}` : card.image} alt={card.nameRU} />
        </a>
        {location.pathname === "/movies" && (
          <button className={cardSaveButtonClassName} type="button" onClick={handleSaveMovie} disabled={isButtonDisabled}>
            {isMovieSaved() ? "" : "Сохранить"}
          </button>
        )}
        {location.pathname === "/saved-movies" && (
          <button className="movies-card__btn-delete" onClick={handleDeleteMovie}></button>
        )}
      </div>
      <div className="movies-card__about-container">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <p className="movies-card__time">{changeduration(card.duration)}</p>
      </div>
    </article>
  );
}

export default MoviesCard;