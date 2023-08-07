import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies (props) {
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
  
  export default Movies;