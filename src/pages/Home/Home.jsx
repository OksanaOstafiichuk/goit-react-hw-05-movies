import { useState, useEffect } from 'react';

import * as API from '../../service/api-service';

import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

// API.fetchMoviesById().then(({ data }) => console.log(data));
// API.fetchCast().then(({ data }) => console.log(data));
// API.fetchReviews().then(({ data }) => console.log(data));

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
      <TrendingMoviesList movies={trendingMovies} />
    </div>
  );
};
