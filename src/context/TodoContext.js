import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Filtrer les todos en fonction du terme de recherche
  const filteredTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TodoContext.Provider value={{ 
      todos: filteredTodos, 
      allTodos: todos,
      addTodo, 
      deleteTodo, 
      toggleTodo,
      searchTerm,
      setSearchTerm
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
