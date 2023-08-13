import axios from 'axios';
import { options } from './options.js';

async function fetchTrends(page) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
export { fetchTrends };
