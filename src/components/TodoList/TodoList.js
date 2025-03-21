import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;