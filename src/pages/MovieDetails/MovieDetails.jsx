import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as API from '../../service/api-service';

import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    API.fetchMoviesById(movieId).then(({ data }) => {
      setMovieDetails(data);
    });
  }, [movieId]);

  return (
    <div>
      <h2>MovieDetails</h2>
      <MoviesItem movieDetails={movieDetails} />
      <Outlet />
    </div>
  );
};
