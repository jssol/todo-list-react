import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;

  const displayManager = (todos) => {
    let display;
    if (todos.length === 0) {
      display = <p className="w-full h-auto sm:h-12 flex items-center justify-center rounded-sm bg-slate-50 text-gray-400 font-bold text-md italic mx-auto px-3">Empty list</p>;
    } else {
      display = todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ));
    }

    return display;
  };

  return (
    <ul
      className="w-full max-h-80 overflow-y-auto lg:w-11/12 flex flex-col align-center self-center mx-auto"
    >
      {displayManager(todos)}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
