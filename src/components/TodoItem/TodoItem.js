import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoItem.css';

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="delete-btn"
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
