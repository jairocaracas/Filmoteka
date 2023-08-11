import { getGenreById } from './fetch-genres.js';

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
       <img class="movie-card__image" id="${id}" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${title}" loading="lazy"/>
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
}

export { renderMovieCards };
