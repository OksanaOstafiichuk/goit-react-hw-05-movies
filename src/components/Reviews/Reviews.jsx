import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../service/api-service';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.fetchReviews(movieId).then(({ data }) => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
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
  );
};
