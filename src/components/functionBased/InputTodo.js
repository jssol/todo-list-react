import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [state, setState] = useState({
    title: '',
  });

  const { title } = state;
  const { addTodoProps } = props;

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setState({
        ...state,
        title: '',
      });
    } else {
      // eslint-disable-next-line
      alert('Please write item');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between my-6 w-full"
    >
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        name="title"
        onChange={onChange}
        className="w-full rounded-full bg-slate-100 py-2 px-4 h-10 shadow-md transition-all outline-slate-300"
      />
      <button
        type="submit"
        className="ml-3 text-md flex items-center justify-center rounded-full shadow-md text-slate-100 bg-green-600 p-2 w-10 h-10"
      >
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
