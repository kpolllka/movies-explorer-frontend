import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/auth';
import api from '../../utils/MainApi';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [webError, setWebError] = useState('');
  const [webSuces, setWebSuces] = useState('');
  const [movies, setMovies] = useState([]);

  const handleMovieDel = (movieId) => {
    api.delMovie(movieId)
    .then(()=>{
      setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== movieId))
     
    }).catch((error) => console.log(`Ошибка ${error}`));
  }

  const handleDeleteMovies = (movie) => {
    const savedMovie = movies.find((card) => card.id === movie.id);
    if (savedMovie) {
      handleMovieDel(savedMovie._id);
    }
  }

  const handleAddMovie = (movie) => {
    api.createNewMovies(movie)
      .then((newMovie) => {
      setMovies([newMovie, ...movies]);
      }).catch((error) => console.log(`Ошибка ${error}`));
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), 
        api.getMoviesInfo()
          ])
      .then(([user, movies]) => {
        setCurrentUser(user);
        setMovies(movies);
      })
      .catch((error) => console.log(`Ошибка ${error}`));
    }
  }, [loggedIn]);
  
  const onRegister = (name, email, password) => {
    auth.register(name, email, password).then(() => {
      onLogin (email, password);
    })
    .catch((error) => {
      if (error === "Ошибка 409") {
        return setWebError("Пользователь с таким email уже существует")
      } else {
        setWebError("При регистрации пользователя произошла ошибка.")
      }
    })
  }

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    auth.checkToken(token).then((res) => {
      setLoggedIn(true);
      navigate(location.pathname);
    }).catch((error) => console.log(`Ошибка ${error}`));
  }
}, [])

const onLogin = (email, password) => {
  auth.authorize(email, password).then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      setLoggedIn(true);
      navigate('/movies');        
    }
  }).catch((error) => {
    if (error === "Ошибка 401") {
      return setWebError("Вы ввели неправильный логин или пароль.");
    } else if (error === "Ошибка 400") {
      return setWebError("При авторизации произошла ошибка. Токен не передан или передан не в том формате.")
    } else {
      setWebError("При авторизации произошла ошибка.")
    }
  })
}

setTimeout(() => {
  setWebError('');
  setWebSuces('');
}, 3000);

const handleUpdateUser = (data) => {
  api.setUserEdit(data)
    .then((user) => {
      setCurrentUser(user);
      setWebSuces("Данные пользователя успешно обновлены.")
    }).catch((error) => {
      if (error === "Ошибка 409") {
        return setWebError("Пользователь с таким email уже существует.")
      } else {
        return setWebError("При обновлении пользователя произошла ошибка.")
      }
    })
}

const onSignOut = () => {
  localStorage.removeItem('token');
  setCurrentUser({});
  setLoggedIn(false);
  navigate('/');
  localStorage.clear();
}

const locationHeader = ((location.pathname==='/')||(location.pathname==='/movies')||(location.pathname==='/saved-movies')||(location.pathname==='/profile'));
const locationFooter = ((location.pathname==='/')||(location.pathname==='/movies')||(location.pathname==='/saved-movies')); 

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        {locationHeader && (<Header loggedIn = {loggedIn} />)}
       
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Login onLogin={onLogin} webError={webError} />} />
          <Route path='/signup' element={<Register onRegister={onRegister} webError={webError} />} />

          <Route path='/profile' element={<ProtectedRouteElement
            element={Profile}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            onSignOut={onSignOut}
            webError={webError}
            webSuces={webSuces} />} />
          
          <Route path='/movies' element={<ProtectedRouteElement
            handleMovieDel={handleMovieDel}
            sevMovies={movies}
            element={Movies}
            loggedIn={loggedIn}
            handleAddMovie={handleAddMovie}
            handleDeleteMovies={handleDeleteMovies} />} />
          
          <Route path='/saved-movies' element={<ProtectedRouteElement
            sevMovies={movies}
            handleDeleteMovies={handleDeleteMovies}
            element={SavedMovies}
            loggedIn={loggedIn}
            movies={movies}/>} />        
              
          <Route path='/*' element={<NotFound replace={true}/>} />          
        </Routes>
        
        {locationFooter && (<Footer />)}

      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
