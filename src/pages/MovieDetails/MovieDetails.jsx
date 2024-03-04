import React from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieById } from 'API/TmbdApi';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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

  return (
    <section
      style={{
        marginTop: 20,
      }}
    >
      <button>
        <Link to={backLinkHref}>Go back</Link>
      </button>
      {loading && <Loader />}

      <img
        width="300px"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
        }
        alt={original_title}
      />

      <section>
        <section>
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
        </section>
        <section>
          <h3>Additional info</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </section>
      </section>
      <Outlet />
    </section>
  );
};

export default MovieDetails;
