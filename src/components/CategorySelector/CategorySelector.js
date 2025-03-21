import React, { useState } from 'react';
import './CategorySelector.css';

const categories = [
  { id: 1, name: 'Travail', color: '#FF5733' },
  { id: 2, name: 'Personnel', color: '#33FF57' },
  { id: 3, name: 'Courses', color: '#3357FF' },
  { id: 4, name: 'Santé', color: '#F033FF' },
  { id: 5, name: 'Autre', color: '#33FFF5' }
];

function CategorySelector({ selectedCategory, onCategoryChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="category-selector">
      <div 
        className="selected-category"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCategory ? (
          <>
            <span 
              className="category-color" 
              style={{ backgroundColor: selectedCategory.color }}
            ></span>
            <span>{selectedCategory.name}</span>
          </>
        ) : (
          <span>Sélectionner une catégorie</span>
        )}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      
      {isOpen && (
        <div className="categories-dropdown">
          {categories.map(category => (
            <div 
              key={category.id}
              className="category-item"
              onClick={() => {
                onCategoryChange(category);
                setIsOpen(false);
              }}
            >
              <span 
                className="category-color" 
                style={{ backgroundColor: category.color }}
              ></span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySelector;
