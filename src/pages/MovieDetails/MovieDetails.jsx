import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';

import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { AddInform } from 'components/AddInform/AddInform';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    API.fetchMoviesById(movieId)
      .then(({ data }) => {
        setMovieDetails(data);
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, [movieId]);

  const handlerGoBack = location?.state?.from ?? '/';

  return (
    <div>
      <Link to={handlerGoBack}>Go Back</Link>

      <MoviesItem movieDetails={movieDetails} />
      <AddInform />
      <Outlet />
    </div>
  );
};
