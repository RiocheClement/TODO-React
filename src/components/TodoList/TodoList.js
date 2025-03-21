import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList() {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return <div className="empty-list">Aucune tâche pour le moment.</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
