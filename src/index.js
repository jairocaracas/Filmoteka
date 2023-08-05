import { renderMovieCards } from './js/render-movies.js';
import { fetchTrends } from './js/fetch-trends.js';
import { fetchMovie } from './js/fetch-movie.js';

let moviesGallery = document.querySelector('.movies-gallery');

renderMovieCards(fetchTrends(), moviesGallery);

moviesGallery.addEventListener('click', fetchMovie);
