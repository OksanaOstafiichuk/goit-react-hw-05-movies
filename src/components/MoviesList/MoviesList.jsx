import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, original_name }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title ?? original_name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
