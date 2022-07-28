import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const hendelChange = evt => {
    setSearchValue(evt.currentTarget.value);
  };

  const hendelSubmit = evt => {
    evt.preventDefault();

    if (searchValue.trim() === '') {
      alert('oopps');
      return;
    }

    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <form onSubmit={hendelSubmit}>
      <input
        type="text"
        placeholder="Search movie"
        value={searchValue}
        onChange={hendelChange}
      />
      <button type="submit">Search movies</button>
    </form>
  );
};
