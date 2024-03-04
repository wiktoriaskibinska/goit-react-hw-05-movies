import React from 'react';
import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ searchMovies, query, setQuery }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    searchMovies(query.toLowerCase());
  };
  const handleInputChange = evt => {
    evt.preventDefault();
    const value = evt.target.value;
    setQuery(value);
  };
  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <div className={css.searchWrapper}>
        <label htmlFor="query"></label>
        <input
          className={css.searchInput}
          type="text"
          name="query"
          placeholder="Type keyword..."
          value={query}
          onChange={handleInputChange}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  searchMovies: PropTypes.func,
  query: PropTypes.string,
  setQuery: PropTypes.func,
};
export default SearchForm;
