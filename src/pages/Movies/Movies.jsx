import SearchForm from 'components/SearchForm/SearchForm';
import React, { useState } from 'react';
import { searchQueryFilm } from 'API/TmbdApi';
import FilmsList from 'components/FilmsList/FilmsList';

export const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = query => {
    setLoading(true);
    searchQueryFilm(query)
      .then(searchResults => {
        setSearchFilms(searchResults);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <SearchForm searchMovies={searchMovies} />
      {loading && <p>loading...</p>}
      <FilmsList films={searchFilms} />
    </div>
  );
};
