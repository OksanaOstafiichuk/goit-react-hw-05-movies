import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    API.fetchCast(movieId)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <h4>{actor.name}</h4>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
