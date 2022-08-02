import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Main, Title } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    API.fetchTrendingMovies()
      .then(({ data }) => {
        setTrendingMovies(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, []);

  return (
    <Main>
      <Title>Trending Movies Today</Title>
      {isLoading && <Loader />}
      <MoviesList movies={trendingMovies} />
    </Main>
  );
}
