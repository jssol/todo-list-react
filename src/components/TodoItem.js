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
    <li className="w-full flex justify-between align-center rounded-sm bg-slate-50 mb-1 self-center mx-auto p-3">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
        className="self-center"
      />
      <span className="ml-2 w-full text-center self-center" style={completed ? completedStyle : null}>
        {title}
      </span>
      <button
        type="button"
        onClick={() => deleteTodoProps(id)}
        className="ml-2 bg-red-200 text-xs text-center font-semibold rounded-full text-red-600 p-1 h-8"
      >
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
