import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const getInitialTodos = () => {
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return { todos: savedTodos } || { todos: [] };
};

const TodoContainer = () => {
  const [state, setState] = useState(getInitialTodos());
  // useEffect(() => {
  //   const temp = localStorage.getItem('todos');
  //   const loadedTodos = JSON.parse(temp);
  //   if (loadedTodos) {
  //     setState({
  //       ...state,
  //       todos: loadedTodos,
  //     });
  //   }
  // }, []);
  useEffect(() => {
    const { todos } = state;
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [state.todos]);

  const { todos } = state;

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({
      todos: [...todos, newTodo],
    });
  };

  const setUpdate = (updatedTitle, id) => {
    setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    }));
  };

  const deleteTodo = (id) => {
    setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  const handleChange = (id) => {
    setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  return (
    <Route exact path="/">
      <div className="w-screen h-screen overflow-hidden flex flex-col justify-center align-center">
        <div className="lg:w-6/12 w-4/5 mx-auto flex flex-col align-center">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={deleteTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </Route>
  );
};

export default TodoContainer;
