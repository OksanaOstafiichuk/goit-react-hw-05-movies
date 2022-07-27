import { useState, useEffect } from 'react';

import * as API from '../../service/api-service';

import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies().then(({ data }) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <div>
      <h2>Trending Movies Today</h2>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};
