import React, { useState } from 'react';
import './TodoFilter.css';

function TodoFilter({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="todo-filter">
      <button 
        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
        onClick={() => handleFilterChange('all')}
      >
        Toutes
      </button>
      <button 
        className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
        onClick={() => handleFilterChange('active')}
      >
        À faire
      </button>
      <button 
        className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
        onClick={() => handleFilterChange('completed')}
      >
        Terminées
      </button>
    </div>
  );
}

export default TodoFilter;
