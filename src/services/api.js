import axios from 'axios';

const API_KEY = 'aba718389d5889e26f3094dd9f1c0ceb';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return await response.data;
};

export const fetchMovieDetails = async id => {
  const response = await axios(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return await response.data;
};

export const fetchMovieActors = async id => {
  const response = await axios(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return await response.data;
};

export const fetchMovieReviews = async id => {
  const response = await axios(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return await response.data;
};

export const fetchSearchMovies = async query => {
  const response = await axios(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  return await response.data;
};
