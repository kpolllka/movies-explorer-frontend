import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
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
      <button className="movies-cardlist__btn" type="submit">Ещё</button>
    </section>
  );
}

export default MoviesCardList;