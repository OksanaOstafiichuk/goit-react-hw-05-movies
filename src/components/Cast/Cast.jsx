import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';
import { CastDesc, CastImg, CastItem, CastList, CastName } from './Cast.styled';

export default function Cast() {
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
    <CastList>
      {cast.map(actor => {
        const { profile_path, id, name, character } = actor;
        const profile = () => {
          if (profile_path) {
            return `https://image.tmdb.org/t/p/w500${profile_path}`;
          } else {
            return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU`;
          }
        };

        return (
          <CastItem key={id}>
            <CastImg src={profile()} alt={name} />
            <CastName>{name}</CastName>
            <CastDesc>Character: {character}</CastDesc>
          </CastItem>
        );
      })}
    </CastList>
  );
}
