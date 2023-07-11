import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ searchFilmsWord }) => {
  const [search, setSearch] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    searchFilmsWord(search.toLowerCase());
  };
  const handleInput = e => {
    setSearch(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleInput}
      ></input>
      <button type="submit">search</button>
    </form>
  );
};
Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};
export default Form;
