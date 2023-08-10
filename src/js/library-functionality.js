import axios from 'axios';
import { options } from './options.js';
import { renderMovieCards } from './render-movies.js';

const moviesContainer = document.querySelector('.movies-gallery');

let watchedMovies = JSON.parse(localStorage.getItem('movies-Watched')) || [];
let queueMovies = JSON.parse(localStorage.getItem('movies-Queue')) || [];

async function fetchSingleMovie(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function renderWatchedMovies() {
  moviesContainer.innerHTML = '';

  const watchedMoviesDetails = await Promise.all(
    watchedMovies.map(async id => await fetchSingleMovie(id))
  );

  renderMovieCards(watchedMoviesDetails, moviesContainer);
}

async function renderQueueMovies() {
  moviesContainer.innerHTML = '';

  const queueMoviesDetails = await Promise.all(
    queueMovies.map(async id => await fetchSingleMovie(id))
  );

  renderMovieCards(queueMoviesDetails, moviesContainer);
}

document.addEventListener('DOMContentLoaded', renderWatchedMovies);

const watchedButton = document.querySelector('#watchedButton');
const queueButton = document.querySelector('#queueButton');

watchedButton.addEventListener('click', renderWatchedMovies);
queueButton.addEventListener('click', renderQueueMovies);

export { renderWatchedMovies, renderQueueMovies };
