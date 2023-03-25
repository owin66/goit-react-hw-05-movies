import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.input.value.trim();

    if (query === '') {
      toast.error('The input is empty!');
      return;
    }
    onSubmit(query);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Enter a movie"
              name="input"
              value={input}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
