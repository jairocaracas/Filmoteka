import { options } from './options.js';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

async function fetchMovie(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const movieId = e.target.getAttribute('id');
    console.log(movieId);

    // Construye la URL del API con el ID de la película
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    try {
      // Realiza la petición utilizando Axios
      const response = await axios.get(apiUrl, options);
      const movieData = response.data;
      console.log(movieData);

      // Construye el marcado de la película
      const instance = basicLightbox.create(`
        <div class="film-card__wrapper">
          <div class="film-card__image-left">
            <img
              class="film-card__image"
              src="https://image.tmdb.org/t/p/original${movieData.poster_path}"
              alt="film"
            /> 
          </div>

          <div class="film-card__description-right">
            <h2 class="film-card__description-title">${movieData.title}</h2>
            <ul class="film-card__description-set">
              <li class="description-set">
                <p class="description-set__text">Vote / Votes</p>
                <p class="description-set__value">
                  <span class="description-set__rating">${
                    movieData.vote_average
                  }</span>
                  <span class="description-set__separator">/</span>
                  <span class="description-set__vote">${
                    movieData.vote_count
                  }</span>
                </p>
              </li>
              <li class="description-set">
                <p class="description-set__text">Popularity</p>
                <p class="description-set__value">${movieData.popularity}</p>
              </li>
              <li class="description-set">
                <p class="description-set__text">Original Title</p>
                <p class="description-set__value">${
                  movieData.original_title
                }</p>
              </li>
              <li class="description-set">
                <p class="description-set__text">Genre</p>
                <p class="description-set__value">${movieData.genres
                  .map(genre => genre.name)
                  .join(', ')}</p>
              </li>
            </ul>

            <div class="film-card__description-about">
              <h2 class="description-about__title">About</h2>
              <p class="description-about__text">
                ${movieData.overview}
              </p>
            </div>

            <div class="film-card__description-button">
              <button class="description-button description-button__watched" data-id="${movieId}">
                add to Watched
              </button>
              <button class="description-button description-button__queue" data-id="${movieId}">
                add to queue
              </button>
            </div>
          </div>
        </div>`);

      instance.show();

      // Array para almacenar las películas
      let watchedMovies = [];
      let queueMovies = [];

      // Función para guardar las películas en Local Storage
      function saveMoviesToLocalStorage() {
        localStorage.setItem('movies-Watched', JSON.stringify(watchedMovies)); //JSON.stringify convierte de objeto js a JSON
        localStorage.setItem('movies-Queue', JSON.stringify(queueMovies));
      }

      // Función para cargar las películas desde Local Storage
      function loadMoviesFromLocalStorage() {
        watchedMovies =
          JSON.parse(localStorage.getItem('movies-Watched')) || []; // JSON.parse convierte de JSON a objeto js
        queueMovies = JSON.parse(localStorage.getItem('movies-Queue')) || [];
      }

      const watchedButton = instance
        .element()
        .querySelector('.description-button__watched');
      const queueButton = instance
        .element()
        .querySelector('.description-button__queue');

      watchedButton.addEventListener('click', () => {
        if (!watchedMovies.includes(movieId)) {
          watchedMovies.push(movieId);
          saveMoviesToLocalStorage();
          console.log('Movie added to watched :', movieId);
        }
      });

      queueButton.addEventListener('click', () => {
        if (!queueMovies.includes(movieId)) {
          queueMovies.push(movieId);
          saveMoviesToLocalStorage();
          console.log('Movie added to Queue:', movieId);
        }
      });
      // Cargar las películas desde Local Storage al inicio
      loadMoviesFromLocalStorage();
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  }
}

export { fetchMovie };
