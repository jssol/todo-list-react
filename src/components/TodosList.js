import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, handleChangeProps, deleteTodoProps } = props;

  return (
    <ul
      className="w-full max-h-80 overflow-y-auto lg:w-11/12 flex flex-col align-center self-center mx-auto"
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodosList;
