import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();

  return (
    <section className="movies-cardlist">
      <div className="movies-cardlist__container">
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
        <article><MoviesCard /></article>
      </div>
      {/* <button className="movies-cardlist__btn" type="button">Ещё</button> */}
      {location.pathname === "/movies" && (<button className = "movies-cardlist__btn">Еще</button>)}
      {location.pathname === "/saved-movies" && (<button className = "movies-cardlist__btn-new">Еще</button>)}
    </section>
  );
}

export default MoviesCardList;