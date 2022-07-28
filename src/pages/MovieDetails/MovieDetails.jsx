import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as API from '../../service/api-service';

import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { AddInform } from 'components/AddInform/AddInform';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    API.fetchMoviesById(movieId).then(({ data }) => {
      setMovieDetails(data);
    });
  }, [movieId]);

  const handlerGoBack = () => navigate(-1);

  return (
    <div>
      <button type="button" onClick={handlerGoBack}>
        Go Back
      </button>
      <MoviesItem movieDetails={movieDetails} />
      <AddInform />
      <Outlet />
    </div>
  );
};
