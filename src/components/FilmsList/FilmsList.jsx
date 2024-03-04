import React from 'react';
import { Link } from 'react-router-dom';

const TrendingList = ({ films }) => {
  return (
    <ul>
      {films.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
