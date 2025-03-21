import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Layout.css';

function Layout() {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Application TODO Liste</h1>
          
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