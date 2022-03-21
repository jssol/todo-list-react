import React, { useState, useEffect } from 'react';

const initialState = {
  input: '',
  todos: [],
  theme: 'light',
};

const App = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    setState({ theme: 'dark' });
    setState({ todos: ['run'] });
    document.documentElement.classList.add(state.theme);
  }, []);

  return (
    <div className="App">
      <h1 className="text-6xl text-center text-red-500 font-bold">Hello world</h1>
      <p>{state.todos.map((todo) => todo)}</p>
    </div>
  );
};

export default App;
