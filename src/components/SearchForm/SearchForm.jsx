import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit, query }) => {
  const [serchQuery, setSerchQuery] = useState(query);

  const handleChange = evt => {
    const { value } = evt.target;
    setSerchQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(serchQuery);

    reset();
  };

  const reset = () => {
    setSerchQuery('');
  };

  return (
    <div className={css.searchFormContainer}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchFormInput}
          type="text"
          value={serchQuery}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Search movie"
        ></input>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchForm;
