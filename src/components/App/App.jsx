import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
// import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
const location = useLocation();
const [LoggedIn, setLoggedIn] = useState(false);
  
  return (
    <>
      {/* <CurrentUserContext.Provider value={currentUser}> */}

        {/* <Header />
          <Main />
          <Login />
          <Register />
          <Profile />
          <Movies />
          <SavedMovies />
          <NotFound />
        <Footer /> */}

        {/* {((location.pathname==='/')||(location.pathname==='/movies')||(location.pathname==='/saved-movies')||(location.pathname==='/profile')) && (<Header LoggedIn = {true} />)} */}
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />          
          <Route path='/*' element={<NotFound />} />          
        </Routes>
        {/* {((location.pathname==='/')||(location.pathname==='/movies')||(location.pathname==='/saved-movies')) && (<Footer />)} */}
        <Footer />        

      {/* </CurrentUserContext.Provider> */}
    </>
  );
}

export default App;
