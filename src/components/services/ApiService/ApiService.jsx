import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const SMALL_POSTER_PATH = `https://image.tmdb.org/t/p/w`;

export const getTrendingMovies = async () => {
  const { data } = await instance.get(
    'trending/movie/week?api_key=be54c980e387a968afdb3128f8703296'
  );
  return data;
};

export const getMovieById = async movie_id => {
  const { data } = await instance.get(
    `movie/${movie_id}?api_key=be54c980e387a968afdb3128f8703296`
  );
  return data;
};

export const getSearchMovie = async title => {
  const { data } = await instance.get(
    `search/movie?api_key=be54c980e387a968afdb3128f8703296&language=en-US&query=${title}&page=1&include_adult=false`
  );
  return data;
};

export const getReview = async review_id => {
  const { data } = await instance.get(
    `review/${review_id}?api_key=be54c980e387a968afdb3128f8703296`
  );
  return data;
};

export const getCast = async movie_id => {
  const { data } = await instance.get(
    `movie/${movie_id}/credits?api_key=be54c980e387a968afdb3128f8703296`
  );
  return data;
};

export const getPosterPath = (path, width = 500) => {
  return path
    ? SMALL_POSTER_PATH + width + path
    : 'https://via.placeholder.com/';
};
