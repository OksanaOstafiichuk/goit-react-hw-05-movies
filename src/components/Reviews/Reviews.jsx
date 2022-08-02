import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';
import {
  ReviewsAuthor,
  ReviewsItem,
  ReviewsList,
  ReviewsText,
} from './Reviews.styled';

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
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(review => {
            return (
              <ReviewsItem key={review.id}>
                <p>{review.content}</p>
                <ReviewsAuthor>{review.author}</ReviewsAuthor>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <ReviewsText>We don't have any reviews for this movie</ReviewsText>
      )}
    </>
  );
};
