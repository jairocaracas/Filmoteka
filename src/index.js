import axios from 'axios';
import { renderMovieCards } from './js/render-movies';

export { options };

let moviesGallery = document.querySelector('.movies-gallery');
let movieCard = document.querySelector('.movie-card');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZlZTYxMDllYjU2ZDliMTA3YjQ5ZDdkMzI2MDVlNyIsInN1YiI6IjY0Y2M0Y2EwZTA0ZDhhMDBhZDkwYWUzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NQpWpJBbEEcJq_7S3bfg-ke5HFKJDM34MJvFESDabEo',
  },
};

async function fetchTrends() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1',
      options
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

renderMovieCards(fetchTrends(), moviesGallery);

moviesGallery.addEventListener('click', async e => {
  e.preventDefault;
  if (e.target.nodeName === 'IMG') {
    console.log(e.target.getAttribute('id'));
  }
});
