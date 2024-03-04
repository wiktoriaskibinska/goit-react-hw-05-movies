import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'API/TmbdApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilmReviews = () => {
      setLoading(true);

      fetchReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchFilmReviews();
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && <p>Film does not have any reviews for now</p>}
    </>
  );
};
