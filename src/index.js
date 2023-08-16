import { renderMovieCards } from './js/render-movies.js';
import { fetchTrends } from './js/fetch-trends.js';
import { fetchMovie } from './js/fetch-movie.js';

import { element } from './js/pagination.js';
import { fetchData } from './js/fetch-search-value.js';
import { membersInfo } from './js/members-info.js';
import '../src/js/scroll-indicator.js';

let form = document.querySelector('.form');
let moviesGallery = document.querySelector('.movies-gallery');
let footerLink = document.querySelector('.footer__link');

let listItem = document.querySelector('#pag');

renderMovieCards(fetchTrends(1), moviesGallery);
element(20, 1);

form.addEventListener('submit', event => {
  event.preventDefault();
  renderMovieCards(fetchData(), moviesGallery);
});

moviesGallery.addEventListener('click', fetchMovie);

listItem.addEventListener('click', e => {
  let nextPage = e.target.querySelector('span').innerText;
  console.log(nextPage);
  renderMovieCards(fetchTrends(nextPage), moviesGallery);
  element(20, nextPage);
});

footerLink.addEventListener('click', membersInfo);
