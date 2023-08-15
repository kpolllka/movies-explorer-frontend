import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesCardList({ cards, handleAddMovie, handleMovieDel, handleDeleteMovies, sevMovies }) {
  const location = useLocation();
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newVisibleCards = 0;

      if (location.pathname === "/movies") {
        if (screenWidth >= 1280) {
          newVisibleCards = 12;
        } else if (screenWidth >= 768) {
          newVisibleCards = 8;
        } else if (screenWidth >= 280 && screenWidth <= 768) {
          newVisibleCards = 5;
        }
      } else {
        newVisibleCards = cards.length;
      }

      setVisibleCards(newVisibleCards);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cards.length, location.pathname]);

  const handleLoadMore = () => {
    const screenWidth = window.innerWidth;
    let additionalCards = 0;

    if (screenWidth >= 1280) {
      additionalCards = 3;
    } else if (screenWidth >= 768) {
      additionalCards = 2;
    } else if (screenWidth >= 280 && screenWidth <= 480) {
      additionalCards = 2;
    }

    setVisibleCards((prevVisibleCards) => {
      const newVisibleCards = prevVisibleCards + additionalCards;
      return newVisibleCards;
    });
  };

  return (
    <section className="movies-cardlist">
      <div className="movies-cardlist__container">
        {cards.slice(0, visibleCards).map((card) => (
          <MoviesCard
            key={card._id || card.id}
            card={card}
            handleAddMovie={handleAddMovie}
            handleMovieDel={handleMovieDel}
            handleDeleteMovies={handleDeleteMovies}
            sevMovies={sevMovies}
          />
        ))}
      </div>
      {location.pathname === "/movies" && visibleCards < cards.length && (
        <button className="movies-cardlist__btn" onClick={handleLoadMore}>
          Еще
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;