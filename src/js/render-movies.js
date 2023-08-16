import { getGenreById } from './fetch-genres.js';
import {
  setWatchedMovies,
  setQueuedMovies,
  loadMoviesFromLocalStorage,
} from './fetch-movie.js';

async function renderMovieCards(fetchFunction, div) {
  let renderCards = await fetchFunction;
  console.log(renderCards);
  div.innerHTML = ' ';

  let newRender = await Promise.all(
    renderCards.map(
      async ({ genre_ids, genres, id, poster_path, release_date, title }) => {
        let genreConverted;
        if (genre_ids != undefined) {
          genreConverted = await getGenreById(genre_ids);
        } else if (genres != undefined) {
          genreConverted = genres.map(genre => genre.name).join(',');
        }

        return `<div class="movie-card" >
          <div class="movie-card__poster">
       <img class="movie-card__image" id="${id}" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${title}" onerror = "this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'" loading="lazy"/>
       <div class="movie-card__menu">
	<div class="movie-card__buttons">
				<button class="movie-card__buttons--watched" data-id="${id}" data-title="${title}">
					<svg xmlns="http://www.w3.org/2000/svg" height="6em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
				</button>
				<button class="movie-card__buttons--queue" data-id="${id}" data-title="${title}">
					<svg xmlns="http://www.w3.org/2000/svg" height="6em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>	
				</button>
			</div>
	</div>
	   </div>
  <div class="movie-card__info">
  <p class="movie-card__text">${title.toUpperCase()} <br/>
    <span class="movie-card__text movie-card__text--accent"> ${genreConverted} | ${release_date.slice(
          0,
          4
        )} </span></p>
  </div>
	
  </div>`;
      }
    )
  );
  div.innerHTML += newRender.join(' ');

  let movieCards = div.querySelectorAll('.movie-card');
  movieCards.forEach(movieCard => {
    let cardButtons = movieCard.querySelector('.movie-card__buttons');
    let cardQueueButton = cardButtons.querySelector(
      '.movie-card__buttons--queue'
    );
    let cardWatchedButton = cardButtons.querySelector(
      '.movie-card__buttons--watched'
    );

    movieCard.addEventListener('mouseover', () => {
      let watchedMovies =
        JSON.parse(localStorage.getItem('movies-Watched')) || [];
      let queuedMovies = JSON.parse(localStorage.getItem('movies-Queue')) || [];
      if (queuedMovies.includes(cardQueueButton.dataset.id)) {
        cardQueueButton.classList.add('activebutton-queue');
        cardQueueButton.classList.remove('inactivebutton-queue');
      }

      if (watchedMovies.includes(cardWatchedButton.dataset.id)) {
        cardWatchedButton.classList.add('activebutton-watched');
        cardWatchedButton.classList.remove('inactivebutton-watched');
      }
    });

    cardQueueButton.addEventListener('click', () => {
      loadMoviesFromLocalStorage();
      if (
        setQueuedMovies(
          cardQueueButton.dataset.id,
          cardQueueButton.dataset.title
        )
      ) {
        cardQueueButton.classList.add('activebutton-queue');
        cardQueueButton.classList.remove('inactivebutton-queue');
      } else {
        cardQueueButton.classList.remove('activebutton-queue');
        cardQueueButton.classList.add('inactivebutton-queue');
      }
    });

    cardWatchedButton.addEventListener('click', () => {
      loadMoviesFromLocalStorage();
      if (
        setWatchedMovies(
          cardWatchedButton.dataset.id,
          cardWatchedButton.dataset.title
        )
      ) {
        cardWatchedButton.classList.add('activebutton-watched');
        cardWatchedButton.classList.remove('inactivebutton-watched');
      } else {
        cardWatchedButton.classList.remove('activebutton-watched');
        cardWatchedButton.classList.add('inactivebutton-watched');
      }
    });
  });
}

export { renderMovieCards };
