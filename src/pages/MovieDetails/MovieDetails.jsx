import { Outlet, useParams, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';

import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { AddInform } from 'components/AddInform/AddInform';
import { Container, LinkBtn } from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    API.fetchMoviesById(movieId)
      .then(({ data }) => {
        setMovieDetails(data);
      })
      .catch(error => {
        toast.error(error.message);
        setError(error);
      });
  }, [movieId]);

  const handlerGoBack = location?.state?.from ?? '/';

  return (
    <Container>
      <LinkBtn to={handlerGoBack}>Go Back</LinkBtn>

      {error && <Navigate to="/" replace />}

      <MoviesItem movieDetails={movieDetails} />
      <AddInform />
      <Outlet />
    </Container>
  );
}
