import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SavedMovies(props) {
  return (
    <main>
      <section className="content">
        <SearchForm />
        <FilterCheckbox />
        {/* <Preloader /> */}
        <MoviesCardList />
      </section>
    </main>
  )
}
  
  export default SavedMovies;