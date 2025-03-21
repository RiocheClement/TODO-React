import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './Home.css';

function Home() {
  // Récupérer le paramètre de recherche de l'URL
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  // État pour éventuellement passer le terme de recherche à TodoList
  const [searchFilter, setSearchFilter] = useState('');

  // Mettre à jour le filtre de recherche quand le paramètre d'URL change
  useEffect(() => {
    setSearchFilter(searchTerm);
  }, [searchTerm]);

  return (
    <div className="home">
      <h1>Ma Liste de Tâches</h1>
      {searchTerm && (
        <div className="search-info">
          Recherche pour: "{searchTerm}"
        </div>
      )}
      <TodoForm />
      <TodoList searchFilter={searchFilter} />
    </div>
  );
}

export default Home;