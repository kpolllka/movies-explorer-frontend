import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies (props) {
    return (
      <section className="content">
        <SearchForm />
        <FilterCheckbox />
        {/* <Preloader /> */}
        <MoviesCardList />
      </section>
    )
  }
  
  export default Movies;