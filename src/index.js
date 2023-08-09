import { renderMovieCards } from './js/render-movies.js';
import { fetchTrends } from './js/fetch-trends.js';
import { fetchMovie } from './js/fetch-movie.js';
import { fetchData } from './js/fetch-search-value.js';

let form = document.querySelector('.form');
let moviesGallery = document.querySelector('.movies-gallery');

renderMovieCards(fetchTrends(), moviesGallery);

form.addEventListener('submit', (event) => {
	event.preventDefault();
	renderMovieCards(fetchData(), moviesGallery);
});

moviesGallery.addEventListener('click', fetchMovie);
