import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.fetchReviews(movieId)
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, [movieId]);

  return (
    <>
      {reviews !== [] ? (
        <p>No one has left a review yet</p>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
