import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const [state, setState] = useState({ editing: false });
  const { editing } = state;

  const {
    todo, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  const { id, completed, title } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.75,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setState({ editing: true });
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setState({ editing: false });
    } else if (e.type === 'blur') {
      setState({ editing: false });
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="w-full h-auto sm:h-12 flex flex-row items-center justify-between align-center rounded-sm bg-slate-50 mb-1 self-center mx-auto px-3">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <div onDoubleClick={handleEditing} className="flex py-3 items-center ml-2 h-full w-full" style={completed ? { ...completedStyle, ...viewMode } : viewMode}>
        {title}
      </div>
      <input
        type="text"
        value={title}
        className="ml-2 h-full w-full bg-transparent focus:bg-slate-100 py-3 px-1 transition-all outline-slate-300"
        style={editMode}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
        onBlur={handleUpdatedDone}
      />
      <button
        type="button"
        onClick={() => deleteTodoProps(id)}
        className="ml-2 bg-red-200 text-xs text-center font-semibold rounded-full text-red-600 py-1 px-2 h-8"
      >
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
