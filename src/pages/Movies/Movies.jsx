import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Main } from '../Home/Home.styled';

export const Movies = () => {
  const [, setSearchValue] = useState('');
  const [moviesByName, setMoviesByName] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(null);

  const hendelSearchForm = searchValue => {
    setSearchValue(searchValue);
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    const value = SearchParams.get('query');
    if (!value) {
      return;
    }

    setIsLoading(true);

    API.fetchMoviesByName(value)
      .then(({ data }) => {
        setMoviesByName(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, [SearchParams]);

  return (
    <Main>
      <SearchForm onSubmit={hendelSearchForm} />
      {isLoading && <Loader />}

      <MoviesList movies={moviesByName} />
    </Main>
  );
};
