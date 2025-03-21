import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ajouter une nouvelle tâche..."
      />
      <button className="add-btn" type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;
