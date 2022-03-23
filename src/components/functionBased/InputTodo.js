import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = props;
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    } else {
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
        className="ml-3 text-sm text-center font-semibold rounded-full shadow-md text-slate-100 bg-green-600 p-2 h-10"
      >
        Submit
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
