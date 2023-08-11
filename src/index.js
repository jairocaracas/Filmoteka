import { renderMovieCards } from './js/render-movies.js';
import { fetchTrends } from './js/fetch-trends.js';
import { fetchMovie } from './js/fetch-movie.js';
import { element } from './js/pagination.js';

let moviesGallery = document.querySelector('.movies-gallery');

let listItem = document.querySelector('#pag');

renderMovieCards(fetchTrends(1), moviesGallery);
element(20, 1);

moviesGallery.addEventListener('click', fetchMovie);

listItem.addEventListener('click', e => {
  let nextPage = e.target.querySelector('span').innerText;
  console.log(nextPage);
  renderMovieCards(fetchTrends(nextPage), moviesGallery);
  element(20, nextPage);
});
