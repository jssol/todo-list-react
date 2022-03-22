import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  const { id, completed, title } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.75,
    textDecoration: 'line-through',
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
