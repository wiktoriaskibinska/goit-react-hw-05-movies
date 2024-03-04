import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieById } from 'API/TmbdApi';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchMovieDetails = () => {
      searchMovieById(movieId)
        .then(movieDetails => {
          setMovieInfo(movieDetails);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchMovieDetails();
  }, [movieId]);

  const {
    title,
    release_date,
    popularity,
    overview,
    genres = [],
    poster_path,
    original_title,
  } = movieInfo || {};

  console.log(movieInfo);
  return (
    <div>
      <img
        width="300px"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
        }
        alt={original_title}
      />
      <div>
        <div>
          <h1>
            {title} ({release_date})
          </h1>
          <p>User score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>

        <h3>Additional info</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
