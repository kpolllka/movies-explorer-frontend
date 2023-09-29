class MainApi {
  constructor({ url, headers }) {
    this._url = url;
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    const token = localStorage.getItem("token");
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponse(res));
  }

  setUserEdit(item) {
    const token = localStorage.getItem("token");
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: item.name, email: item.email }),
    }).then((res) => this._getResponse(res));
  }

  getMoviesInfo() {
    const token = localStorage.getItem("token");
    return fetch(this._url + "/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponse(res));
  }

  createNewMovies(movie) {
    const token = localStorage.getItem("token");
    return fetch(this._url + "/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: "https://api.nomoreparties.co" + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail:
          "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => this._getResponse(res));
  }

  delMovie(moviesId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/movies/${moviesId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponse(res));
  }
}

const api = new MainApi({
  url: "https://api.kino.nomoredomains.xyz",
});

export default api;
