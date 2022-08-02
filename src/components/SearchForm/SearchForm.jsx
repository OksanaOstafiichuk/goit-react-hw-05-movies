import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { Form, Input, Button } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const hendelChange = evt => {
    setSearchValue(evt.currentTarget.value);
  };

  const hendelSubmit = evt => {
    evt.preventDefault();

    if (searchValue.trim() === '') {
      toast.warn('Sorry, you need to enter a movie title.');
      return;
    }

    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <Form onSubmit={hendelSubmit}>
      <Input
        type="text"
        placeholder="Search movie"
        value={searchValue}
        onChange={hendelChange}
      />
      <Button type="submit">
        <ImSearch />
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
