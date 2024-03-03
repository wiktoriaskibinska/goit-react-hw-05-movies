import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      Movie Details
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};
