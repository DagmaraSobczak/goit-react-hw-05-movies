import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '6f157e49e729f31d4a7c0245fe6212a7';

const getTrendingMovies = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: KEY,
      },
    });

    return await resp.data.results;
  } catch (err) {
    console.error(err.stack);
  }
};

const getMovieByQuery = async query => {
  try {
    const resp = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: KEY,
        query,
      },
    });

    return await resp.data.results;
  } catch (err) {
    console.error(err.stack);
  }
};

const getMovieDetails = async id => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: KEY,
      },
    });

    return await resp.data;
  } catch (err) {
    console.error(err.stack);
  }
};

const getMovieCredits = async id => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
      params: {
        api_key: KEY,
      },
    });

    return await resp.data;
  } catch (err) {
    console.error(err.stack);
  }
};

const getMovieReviews = async id => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
      params: {
        api_key: KEY,
      },
    });

    return await resp.data.results;
  } catch (err) {
    console.error(err.stack);
  }
};

const Api = {
  getTrendingMovies,
  getMovieByQuery,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default Api;
