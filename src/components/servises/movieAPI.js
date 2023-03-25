import axios from 'axios';

export const movieAPI = async page => {
  const params = { api_key: '17d8222ac7770cbf237f3abe7092e221' };
  const { data } = axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?page=${page}`,
    { params }
  );
  return data;
};

export const getMovieId = async id => {
  const params = { api_key: '17d8222ac7770cbf237f3abe7092e221' };
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params,
  });
  return data;
};

export const getMovieCredits = async id => {
  const params = { api_key: '17d8222ac7770cbf237f3abe7092e221' };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params,
    }
  );
  return data.cast;
};

export const getMovieReviews = async id => {
  const params = { api_key: '17d8222ac7770cbf237f3abe7092e221' };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params,
    }
  );
  return data;
};

export const getMovieSearch = async (query, page) => {
  const params = { api_key: '17d8222ac7770cbf237f3abe7092e221', query: query };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?page=${page}`,
    {
      params,
    }
  );
  return data;
};
