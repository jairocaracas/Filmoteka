import axios from 'axios';
import Notiflix from 'notiflix';
import { options } from './options.js';

let inputForm = document.querySelector('.form__input');

let searchData;
let data;

let page = 1;

async function fetchData() {
	searchData = inputForm.value;
	try {
		Notiflix.Loading.circle({
			svgColor: '#ff6b08',
		});
		const response = await axios.get(
			`https://api.themoviedb.org/3/search/movie?query=${searchData}&include_adult=false&language=en-US&page=${page}`, options);
		data = response.data.results;
		console.log(data);
		if (data.length === 0) {
				console.log("Sorry, there are no images matching your search query. Please try again.");
				Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
				Notiflix.Loading.remove();
				return;
		}
		Notiflix.Loading.remove();
		return data;
	} catch (error) {
		console.error(error);
		Notiflix.Notify.failure('An error ocurred');
	}
}

export { fetchData };
