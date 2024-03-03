import React from 'react';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from '../pages/Reviews/Reviews.jsx';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
