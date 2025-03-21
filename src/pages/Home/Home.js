import React from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Ma Liste de Tâches</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Home;
