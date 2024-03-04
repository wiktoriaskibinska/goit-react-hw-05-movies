import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'API/TmbdApi';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCast = () => {
      setLoading(true);
      fetchActors(movieId)
        .then(actors => {
          setCastInfo(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchCast();
  }, [movieId]);
  console.log(castInfo);

  return (
    <div>
      Cast
      <ul>
        {castInfo.map(
          ({ id, profile_path, original_name, name, character }) => (
            <li key={id}>
              <img
                width="200px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
                alt={original_name}
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Cast;
