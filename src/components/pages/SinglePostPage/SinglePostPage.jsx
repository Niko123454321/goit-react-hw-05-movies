import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import {
  getMovieById,
  getPosterPath,
} from 'components/services/ApiService/ApiService';
import css from './singlePostPage.module.css';

const SinglePostPage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const location = useLocation();
  const cameBack = location.state?.from ?? '/';

  useEffect(() => {
    if (!id) {
      return;
    }
    const feachMovie = async () => {
      try {
        const result = await getMovieById(id);
        setMovie(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    feachMovie();
  }, [id]);

  if (movie) {
    const genres = [];
    for (const genre of movie.genres) {
      genres.push(genre.name, ' ');
    }
    return (
      <div>
        <Link to={cameBack}>
          <button type="button">Go back</button>
        </Link>
        <div className={css.div}>
          <img
            className={css.img}
            src={getPosterPath(movie.poster_path, 300)}
            alt={movie.original_title}
          />
          <div>
            <h1>{movie.original_title}</h1>
            <p>userScore: {movie.vote_average.toFixed(1)}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{genres}</p>
          </div>
        </div>
        <div className={css.inform}>
          <h2>Addition information</h2>
          <ul>
            <Link to="cast" state={{ from: cameBack }}>
              <li>Cast</li>
            </Link>
            <Link to="reviews" state={{ from: cameBack }}>
              <li>Reviews</li>
            </Link>
          </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
  }
};

export default SinglePostPage;
