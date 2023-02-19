import MovieSearchList from 'components/services/MovieSerchList/MovieSerchList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/services/ApiService/ApiService';

const TrendingMovies = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setFilms(prevFilms => data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return <MovieSearchList films={films} />;
};

export default TrendingMovies;
