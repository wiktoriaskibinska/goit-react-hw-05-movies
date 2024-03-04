import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { searchQueryFilm } from 'API/TmbdApi';
import FilmsList from 'components/FilmsList/FilmsList';

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
    <div>
      <SearchForm
        searchMovies={searchMovies}
        query={query}
        setQuery={setQuery}
      />
      {loading && <p>loading...</p>}
      <FilmsList films={searchFilms} />
    </div>
  );
};
export default Movies;
