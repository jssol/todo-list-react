import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = (props) => {
  const { input, handleChange, handleSubmit } = props;

  return (
    <div className="self-center my-2 mx-auto px-2 py-1">
      <form onSubmit={handleSubmit}>
        <input type="text" id="todo" name="todo" value={input} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

TodoInput.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
