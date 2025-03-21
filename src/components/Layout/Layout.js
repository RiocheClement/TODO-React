import React, { useState } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Layout.css';

function Layout() {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const showSearchBar = location.pathname === '/'; // Afficher seulement sur la page d'accueil

  // Fonction pour gérer la recherche
  const handleSearch = (searchTerm) => {
    // Si vous êtes sur la page d'accueil
    if (location.pathname === '/') {
      // Utiliser un paramètre de recherche dans l'URL
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
      console.log("Recherche:", searchTerm);
    }
  };

  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Application TODOList</h1>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '×' : '☰'}
          </button>
          
          <nav className={`app-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" end>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/statistics">
                  Statistiques
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings">
                  Paramètres
                </NavLink>
              </li>
            </ul>
          </nav>
          
          {/* Ajouter la SearchBar ici, seulement si on est sur la page d'accueil */}
          {showSearchBar && (
            <div className="header-search">
              <SearchBar onSearch={handleSearch} />
            </div>
          )}
        </div>
      </header>
      
      <main className="app-main">
        <Outlet />
      </main>
      
      <footer className="app-footer">
        <p>© 2023 TodoApp - Gérez vos tâches efficacement</p>
      </footer>
    </div>
  );
}

export default Layout;