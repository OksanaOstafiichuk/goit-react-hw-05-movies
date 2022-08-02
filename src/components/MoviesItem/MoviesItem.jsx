import PropTypes from 'prop-types';

import {
  CartMovie,
  DescMovie,
  ImgMovie,
  SpanMovie,
  TitleMovie,
} from './MoviesItem.styled';

export const MoviesItem = ({ movieDetails }) => {
  const { poster_path, original_title, overview, genres, vote_average } =
    movieDetails;

  const genresAll = () => {
    if (genres) {
      return genres
        .map(el => {
          return el.name;
        })
        .join(', ');
    } else {
      return 'genres are not defined.';
    }
  };

  const poster = () => {
    if (poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    } else {
      return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU`;
    }
  };

  return (
    <CartMovie>
      <ImgMovie src={poster()} alt={original_title} />
      <div>
        <TitleMovie>{original_title}</TitleMovie>
        <DescMovie>
          <SpanMovie>User Score </SpanMovie>
          {Math.round((vote_average * 100) / 10)}%
        </DescMovie>
        <DescMovie>
          <SpanMovie>Overview: </SpanMovie>
          {overview}
        </DescMovie>
        <DescMovie>
          <SpanMovie>Genres: </SpanMovie>
          {genresAll()}
        </DescMovie>
      </div>
    </CartMovie>
  );
};

MoviesItem.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    vote_average: PropTypes.number,
  }),
};
