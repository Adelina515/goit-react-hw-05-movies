import { useState } from 'react';
import PropTypes from 'prop-types';
import style from 'components/Form/Form.module.css';

const Form = ({ searchWord }) => {
  const [search, setSearch] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    searchWord(search.toLowerCase());
    setSearch('');
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
      <button type="submit" className={style.formBtn}>
        search
      </button>
    </form>
  );
};
Form.propTypes = {
  searchWord: PropTypes.func.isRequired,
};
export default Form;
