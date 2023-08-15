class MovieApi {
    constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
    }
  
    _getResponse(res) {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    }
  
    getMovieInfo() {
      return fetch(this._url, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
        },
      }).then((res) => this._getResponse(res));
    }
  }
  
  const apiMovie = new MovieApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    },
  );
  
  export default apiMovie;