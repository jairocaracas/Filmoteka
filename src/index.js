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

let currentPage = 'trends';

renderMovieCards(fetchTrends(1), moviesGallery);

form.addEventListener('submit', event => {
  event.preventDefault();
  currentPage = 'search';
  renderMovieCards(fetchData(1), moviesGallery);
});

moviesGallery.addEventListener('click', fetchMovie);

listItem.addEventListener('click', e => {
  let nextPage = e.target.querySelector('span').innerText;
  console.log(nextPage);
  if (currentPage === 'trends') {
    renderMovieCards(fetchTrends(nextPage), moviesGallery);
  }
  if (currentPage === 'search') {
    renderMovieCards(fetchData(nextPage), moviesGallery);
  }
});

footerLink.addEventListener('click', membersInfo);
