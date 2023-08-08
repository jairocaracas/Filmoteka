import { options } from './options.js';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

const modale = document.querySelector('.modal');

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
      const data = response.data;
      console.log(data);

      // Configura un controlador de evento para abrir el modal al hacer clic en la imagen
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  }
}
export { fetchMovie };

function markup() {
  const markup = data
    .map(movie => {
      return `
    <div class="film-card__wrapper">
      <div class="film-card__image-left">
        <img
          class="film-card__image"
          src="https://image.tmdb.org/t/p/original${movie.poster_path}"
          alt="film"
        /> 
      </div>

      <div class="film-card__description-right">
        <h2 class="film-card__description-title">${movie.title}</h2>
        <ul class="film-card__description-set">
          <li class="description-set">
            <p class="description-set__text">Vote / Votes</p>
            <p class="description-set__value">
              <span class="description-set__rating">${movie.vote_average}</span>
              <span class="description-set__separator">/</span>
              <span class="description-set__vote">${movie.vote_count}</span>
            </p>
          </li>
          <li class="description-set">
            <p class="description-set__text">Popularity</p>
            <p class="description-set__value">${movie.popularity}</p>
          </li>
          <li class="description-set">
            <p class="description-set__text">Original Title</p>
            <p class="description-set__value">${movie.original_title}</p>
          </li>
          <li class="description-set">
            <p class="description-set__text">Genre</p>
            <p class="description-set__value">${movie.genresList}</p>
          </li>
        </ul>

        <div class="film-card__description-about">
          <h2 class="description-about__title">About</h2>
          <p class="description-about__text">
            ${movie.modifiedOverwiew}
          </p>
        </div>

        <div class="film-card__description-button">
          <button class="description-button description-button__watched">
            add to Watched
          </button>
          <button class="description-button description-button__queue">
            add to queue
          </button>
        </div>
      </div>
    </div>`;
    })
    .join(' ');

  modale.innerHTML = markup;

  // Crea el modal utilizando basicLightbox
  const modal = basicLightbox.create(modalContent);

  // Configura un controlador de evento para abrir el modal al hacer clic en la imagen
  modal.show();
}
