import React from 'react';
import { useState } from 'react';

const SearchForm = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;