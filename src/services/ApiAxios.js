import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '898d34a3bae694ae66d81df7ebc9a78d';

export const fetchMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchSearchMovies = async searchWord => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${searchWord}`
  );
  return response.data.results;
};

export const fetchMoviesDetails = async searchWordId => {
  const response = await axios.get(
    `${BASE_URL}movie/${searchWordId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMoviesCredits = async searchWordId => {
  const response = await axios.get(
    `${BASE_URL}movie/${searchWordId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMoviesReviews = async searchWordId => {
  const response = await axios.get(
    `${BASE_URL}movie/${searchWordId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
