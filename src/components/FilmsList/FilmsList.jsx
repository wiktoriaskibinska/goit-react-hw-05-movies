import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './FilmList.module.css';
import PropTypes from 'prop-types';

const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.filmsList}>
      {films.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            className={css.filmItem}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
FilmsList.propTypes = {
  films: PropTypes.array,
};

export default FilmsList;
