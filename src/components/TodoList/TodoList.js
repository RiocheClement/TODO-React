import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ searchFilter = '' }) {
  const { todos } = useContext(TodoContext);
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Appliquer le filtre de recherche avec la bonne propriété (text)
  useEffect(() => {
    if (searchFilter && todos && todos.length > 0) {
      const filtered = todos.filter(todo => 
        todo.text && todo.text.toLowerCase().includes(searchFilter.toLowerCase())
      );
      setFilteredTodos(filtered);
    } else {
      setFilteredTodos(todos || []);
    }
  }, [searchFilter, todos]);

  if (!filteredTodos || filteredTodos.length === 0) {
    return (
      <div className="empty-list">
        {searchFilter ? `Aucune tâche ne correspond à "${searchFilter}".` : "Aucune tâche pour le moment."}
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
