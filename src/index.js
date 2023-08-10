import { renderMovieCards } from './js/render-movies.js';
import { fetchTrends } from './js/fetch-trends.js';
import { fetchMovie } from './js/fetch-movie.js';
import { fetchData } from './js/fetch-search-value.js';
import { membersInfo } from './js/members-info.js';

let form = document.querySelector('.form');
let moviesGallery = document.querySelector('.movies-gallery');
let footerLink = document.querySelector('.footer__link');

renderMovieCards(fetchTrends(), moviesGallery);

form.addEventListener('submit', (event) => {
	event.preventDefault();
	renderMovieCards(fetchData(), moviesGallery);
});

moviesGallery.addEventListener('click', fetchMovie);

footerLink.addEventListener('click', membersInfo);
