import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies (props) {
    return (
      <main className="content">
        <SearchForm />
        <FilterCheckbox />
        {/* <Preloader /> */}
        <MoviesCardList />
      </main>
    )
  }
  
  export default Movies;