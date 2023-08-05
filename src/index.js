import { renderMovieCards } from './js/render-movies';
import { fetchTrends } from './js/fetch-trends';
import { fetchMovie } from './js/fetch-movie';

let moviesGallery = document.querySelector('.movies-gallery');

renderMovieCards(fetchTrends(), moviesGallery);

moviesGallery.addEventListener('click', fetchMovie);
