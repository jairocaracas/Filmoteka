import axios from 'axios';
import { options } from './options';

async function fetchGenre() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',
      options
    );
    return response.data.genres;
  } catch (error) {
    console.error(error);
  }
}

async function getGenreById(id) {
  let genres = await fetchGenre();

  let newArray = [];
  let filtered = genres.map(genre => {
    for (let i = 0; i < id.length; i++) {
      if (genre.id === id[i]) {
        newArray.push(genre.name);
      }
    }
  });
  // console.log(newArray);
  return newArray;
}

export { getGenreById };
