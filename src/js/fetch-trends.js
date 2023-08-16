import axios from 'axios';
import Notiflix from 'notiflix';

import { options } from './options.js';
import { element } from './pagination.js';

async function fetchTrends(page) {
  Notiflix.Loading.dots('Loading movies...');
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`,
      options
    );
    element(response.data.total_pages, page);

    return response.data.results;
  } catch (error) {
    console.error(error);
  } finally {
    Notiflix.Loading.remove();
  }
}
export { fetchTrends };
