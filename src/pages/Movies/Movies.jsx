import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { searchQueryFilm } from 'API/TmbdApi';
import FilmsList from 'components/FilmsList/FilmsList';
import Loader from 'components/Loader/Loader';
import css from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = query => {
    setLoading(true);
    searchQueryFilm(query)
      .then(searchResults => {
        setSearchFilms(searchResults);
        localStorage.setItem('searchQuery', query);
        localStorage.setItem('searchResults', JSON.stringify(searchResults));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const query = localStorage.getItem('searchQuery');
    const savedResults = localStorage.getItem('searchResults');
    if (query) {
      setQuery(query);
    }
    if (savedResults) {
      setSearchFilms(JSON.parse(savedResults));
    }
  }, []);

  return (
    <section className={css.moviesSection}>
      <h1>Search for a movie!</h1>
      <SearchForm
        searchMovies={searchMovies}
        query={query}
        setQuery={setQuery}
      />
      {loading && <Loader />}
      {searchFilms.length > 0 ? (
        <FilmsList films={searchFilms} />
      ) : (
        <p>Sorry, no movies found. </p>
      )}
    </section>
  );
};
export default Movies;
