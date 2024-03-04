import React from 'react';
import { fetchTrending } from 'API/TmbdApi';
import { useEffect, useState } from 'react';
import FilmsList from 'components/FilmsList/FilmsList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchTrendingFilms = () => {
      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <section>
      <h1>Trending List</h1>
      <FilmsList films={films} />
      {loading && <Loader />}
    </section>
  );
};
export default Home;
