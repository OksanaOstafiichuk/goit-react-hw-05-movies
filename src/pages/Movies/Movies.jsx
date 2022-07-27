import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as API from '../../service/api-service';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesByName, setMoviesByName] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();

  const hendelSearchForm = searchValue => {
    setSearchValue(searchValue);
  };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    API.fetchMoviesByName(searchValue).then(({ data }) => {
      setMoviesByName(data.results);
      setSearchParams({ query: searchValue });
    });
  }, [searchValue, setSearchParams]);

  return (
    <div>
      <h2>Movies</h2>
      <SearchForm onSubmit={hendelSearchForm} />
      <MoviesList movies={moviesByName} />
    </div>
  );
};
