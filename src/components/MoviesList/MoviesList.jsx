import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, Item, Image, Title, ItemLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, original_name, poster_path }) => {
        const poster = () => {
          if (poster_path) {
            return `https://image.tmdb.org/t/p/w500${poster_path}`;
          } else {
            return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU`;
          }
        };
        return (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
              <Image src={poster()} alt={original_name} />
              <Title>{title ?? original_name}</Title>
            </ItemLink>
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
