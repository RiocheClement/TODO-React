// components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher une tâche..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {searchTerm && (
        <button 
          className="clear-search" 
          onClick={() => {
            setSearchTerm('');
            onSearch('');
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;
