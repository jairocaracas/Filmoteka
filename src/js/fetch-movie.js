import { options } from './options.js';
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';

// Array para almacenar las películas
let watchedMovies = [];
let queueMovies = [];

async function fetchMovie(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const movieId = e.target.getAttribute('id');
    // console.log(movieId);

    // Construye la URL del API con el ID de la película
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    try {
      Notiflix.Loading.dots('Loading movie...');
      // Realiza la petición utilizando Axios
      const response = await axios.get(apiUrl, options);
      const movieData = response.data;
      // console.log(movieData);
      Notiflix.Loading.remove();
      // Construye el marcado de la película
      const instance = basicLightbox.create(`
        <div class="film-card__wrapper">

       <button class="modal__btnX" data-modal-close>
          <span class="modal__iconX">✕</span>
      </button>

          <div class="film-card__image-left">
            <img
              class="film-card__image"
              src="https://image.tmdb.org/t/p/original${movieData.poster_path}"
							onerror = "this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'"
              alt="film"
            /> 
          </div>

          <div class="film-card__description-right">
            <h2 class="film-card__description-title">${movieData.title}</h2>
            <ul class="film-card__description-set">
              <li class="description-set">
                <div class="description-set__text">Vote / Votes</div>
                <div class="description-set__value">
                  <span class="description-set__rating">${
                    movieData.vote_average
                  }</span>
                  <span class="description-set__separator">/</span>
                  <span class="description-set__vote">${
                    movieData.vote_count
                  }</span>
                </div>
              </li>
              <li class="description-set">
                <div class="description-set__text">Popularity</div>
                <div class="description-set__value popularity">${
                  movieData.popularity
                }</div>
              </li>
              <li class="description-set">
                <div class="description-set__text">Original Title</div>
                <div class="description-set__value">${
                  movieData.original_title
                }</div>
              </li>
              <li class="description-set">
                <div class="description-set__text">Genre</div>
                <div class="description-set__value genres">${movieData.genres
                  .map(genre => genre.name)
                  .join(', ')}</div>
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

      //evento de clic al botón de "X" para cerrar
      const closeButton = instance.element().querySelector('.modal__btnX');
      closeButton.addEventListener('click', () => {
        instance.close();
      });

      instance.show();
      // oprimir tecla Esp para salir de modal
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          instance.close();
        }
      });

      // Clases de botones solo al abrir modal
      const watchedButton = instance
        .element()
        .querySelector('.description-button__watched');
      const queueButton = instance
        .element()
        .querySelector('.description-button__queue');

      watchedButton.addEventListener('click', () => {

				if(setWatchedMovies(movieId, movieData.title)) {
					watchedButton.classList.add('active'); // añadir la clase activa
				} 
				else {
					watchedButton.classList.remove('active'); // Remover la clase activa
				}				
      });

      queueButton.addEventListener('click', () => {
				if(setQueuedMovies(movieId, movieData.title)) {
					queueButton.classList.add('active'); // añadir la clase activa
				}
				else {
					queueButton.classList.remove('active'); // Remover la clase activa
				}

        if (watchedMovies.includes(movieId)) {
          watchedMovies = watchedMovies.filter(id => id !== movieId); // Eliminar la película de la lista
          saveMoviesToLocalStorage();
          watchedButton.classList.remove('active'); // Remover la clase activa
          watchedButton.textContent = 'add to watched';
          Notiflix.Notify.info(
            `Película "${movieData.title}" removida de "Vistas"`
          );
          // console.log('Movie removed from watched:', movieId);
        } else {
          watchedMovies.push(movieId); // añadir la película de la lista
          saveMoviesToLocalStorage();
          watchedButton.classList.add('active'); // añadir la clase activa
          watchedButton.textContent = 'remove from watched';
          Notiflix.Notify.success(
            `Película "${movieData.title}" añadida a "Vistas"`
          );
          // console.log('Movie added to watched:', movieId);
        }
      });

      queueButton.addEventListener('click', () => {
        if (queueMovies.includes(movieId)) {
          queueMovies = queueMovies.filter(id => id !== movieId); // Eliminar la película de la lista
          saveMoviesToLocalStorage();
          queueButton.classList.remove('active'); // Remover la clase activa
          queueButton.textContent = 'add to queue';
          Notiflix.Notify.info(
            `Película "${movieData.title}" removida de "Cola"`
          );
          // console.log('Movie removed from queue:', movieId);
        } else {
          queueMovies.push(movieId); // añadir la película de la lista
          saveMoviesToLocalStorage();
          queueButton.classList.add('active'); // añadir la clase activa
          queueButton.textContent = 'remove from queue';
          Notiflix.Notify.success(
            `Película "${movieData.title}" añadida a "Cola"`
          );
          // console.log('Movie added to queue:', movieId);
        }

      });
			
      // Cargar las películas desde Local Storage al inicio
      loadMoviesFromLocalStorage();

      // Verificar si la película ya está en la lista de películas guardadas y agregar clase activa
      if (watchedMovies.includes(movieId)) {
        watchedButton.classList.add('active');
        watchedButton.textContent = 'remove from queue';
      }

      if (queueMovies.includes(movieId)) {
        queueButton.classList.add('active');
        queueButton.textContent = 'remove from queue';
      }
    } catch (error) {
      Notiflix.Notify.failure(
        'Error al cargar la película. Por favor, intenta nuevamente más tarde.'
      );
    }
  }
}

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

function setWatchedMovies(movieId, movieTitle) {
	if (watchedMovies.includes(movieId)) {
		watchedMovies = watchedMovies.filter(id => id !== movieId); // Eliminar la película de la lista
		saveMoviesToLocalStorage();
		Notiflix.Notify.info(
			`Película "${movieTitle}" removida de "Vistas"`
		);
		// console.log('Movie removed from watched:', movieId);
		return false;
	} else {
		watchedMovies.push(movieId); // añadir la película de la lista
		saveMoviesToLocalStorage();
		Notiflix.Notify.success(
			`Película "${movieTitle}" añadida a "Vistas"`
		);
		// console.log('Movie added to watched:', movieId);
		return true;
	}
}

function setQueuedMovies(movieId, movieTitle) {
	if (queueMovies.includes(movieId)) {
		queueMovies = queueMovies.filter(id => id !== movieId); // Eliminar la película de la lista
		saveMoviesToLocalStorage();

		Notiflix.Notify.info(
			`Película "${movieTitle}" removida de "Cola"`
		);
		// console.log('Movie removed from queue:', movieId);
		return false;
	} else {
		queueMovies.push(movieId); // añadir la película de la lista
		saveMoviesToLocalStorage();
		Notiflix.Notify.success(
			`Película "${movieTitle}" añadida a "Cola"`
		);
		// console.log('Movie added to queue:', movieId);
		return true;
	}
}

export { fetchMovie,setWatchedMovies,setQueuedMovies,loadMoviesFromLocalStorage,saveMoviesToLocalStorage };
