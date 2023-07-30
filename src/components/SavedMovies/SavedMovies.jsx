import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    return (
      <main className="content">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
      </main>
    )
  }
  
  export default SavedMovies;