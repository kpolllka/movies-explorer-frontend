import "./MoviesCard.css";
import movie from "../../images/moviecard.png"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesCard({name}) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  // React.useEffect(() => {
  //   // Google Analytics
  //   ga("send", "pageview");
  // }, [location]);

  const cardSaveButtonClassName = ( // Создаём переменную, которую зададим в "className" для кнопки сохранения фильма 
    `movies-card__btn-save ${isActive && "movies-card__btn-save_active"}` 
  );
  
  const handleClick = () => {
    setIsActive(current => !current); // toggle кнопки сохранения фильма
  }
 
  return (
    <article className="movies-card">
      <div className="movies-card__img-container">
        <img className="movies-card__img" src={movie} alt={name} />
        {location.pathname === "/movies" && (<button className={cardSaveButtonClassName} type="button" onClick={handleClick}>{!isActive && "Сохранить"}</button>)}
        {location.pathname === "/saved-movies" && (<button className = "movies-card__btn-delete"></button>)}
      </div>
      <div className="movies-card__about-container">
        <h2 className="movies-card__title">Баския: Взрыв реальности</h2>
        <p className="movies-card__time">1ч 17м</p>
      </div>      
    </article>
  );
}

export default MoviesCard;
