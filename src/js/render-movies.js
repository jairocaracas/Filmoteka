import { getGenreById } from './fetch-genres.js';

async function renderMovieCards(fetchFunction, div) {
  let renderCards = await fetchFunction;
  div.innerHTML = ' ';

  let newRender = await Promise.all(
    renderCards.map(
      async ({ genre_ids, id, poster_path, release_date, title }) => {
        let genre = await getGenreById(genre_ids);
        return `<div class="movie-card" >
          <div class="movie-card__poster">
       <img class="movie-card__image" id="${id}" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${title}" loading="lazy"/>
       </div>
  <div class="movie-card__info">
  <p class="movie-card__text">${title.toUpperCase()} <br/>
    <span class="movie-card__text movie-card__text--accent"> ${genre} | ${release_date.slice(
          0,
          4
        )} </span></p>
  </div>
  </div>`;
      }
    )
  );
  div.innerHTML += newRender.join(' ');
}

export { renderMovieCards };
