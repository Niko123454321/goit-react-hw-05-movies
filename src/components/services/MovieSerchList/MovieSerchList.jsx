import { Link, useLocation } from 'react-router-dom';
import css from './movieSearchList.module.css';
import { getPosterPath } from '../ApiService/ApiService';

const MovieSearchList = ({ films }) => {
  const location = useLocation();
  const element = films.map(({ id, poster_path, title }) => (
    <Link
      to={`/movies/${id}`}
      key={id}
      state={location}
      className={css.wrapSearchList}
    >
      <li className={css.seachList}>
        <img src={getPosterPath(poster_path, 300)} alt={title} />
      </li>
      <p>{title}</p>
    </Link>
  ));
  return <ul className={css.searchGallery}>{element}</ul>;
};

export default MovieSearchList;
