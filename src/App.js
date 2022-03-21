import React, { useState, useEffect } from 'react';
import TodoInput from './components/form';

const initialState = {
  input: '',
  todos: [],
  theme: 'light',
};

const App = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    setState({ theme: 'dark' });
    document.documentElement.classList.add(state.theme);
  }, []);

  const handleChange = (e) => {
    setState({ input: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ todos: ['run'] });
  };

  const { input } = state;

  return (
    <div className="flex flex-col align-center justify-center">
      <h1 className="text-8xl text-center text-red-300 font-bold mt-8 mb-2">todos</h1>
      <TodoInput input={input} handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

export default App;
