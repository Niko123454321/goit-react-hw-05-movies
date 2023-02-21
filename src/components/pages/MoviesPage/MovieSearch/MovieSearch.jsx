import { getSearchMovie } from 'components/services/ApiService/ApiService';
import MovieSearchList from 'components/services/MovieSerchList/MovieSerchList';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const serchMovie = value => {
    if (value) {
      setSearchParams({ query: value });
    }
  };
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (!query) {
          return;
        }
        const data = await getSearchMovie(query);
        setMovies(prevFilms => data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovie();
  }, [query]);
  return (
    <>
      <MovieSearchForm onSubmit={serchMovie} />
      <MovieSearchList films={movies} />
    </>
  );
};
export default MovieSearch;
