import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as API from '../../service/api-service';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [moviesByName, setMoviesByName] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();

  const hendelSearchForm = searchValue => {
    setSearchValue(searchValue);
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    const value = SearchParams.get('query');
    if (!value) {
      return;
    }

    API.fetchMoviesByName(value)
      .then(({ data }) => {
        setMoviesByName(data.results);
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, [SearchParams]);

  return (
    <div>
      <h2>Movies</h2>
      <SearchForm onSubmit={hendelSearchForm} />
      <MoviesList movies={moviesByName} />
    </div>
  );
};
