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
  }, []);

  return (
    <div className="App">
      <h1 className="text-2xl text-center text-red-800">Hello world</h1>
      <p>{state.todos.map((todo) => todo)}</p>
    </div>
  );
};

export default App;
