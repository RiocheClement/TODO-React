import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Settings.css';

function Settings() {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('fr');

  return (
    <div className="settings">
      <h1>Paramètres</h1>
      
      <section className="settings-section">
        <h2>Apparence</h2>
        <div className="setting-item">
          <label>Thème</label>
          <div className="theme-options">
            <button 
              className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
              onClick={() => setTheme('light')}
            >
              Clair
            </button>
            <button 
              className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => setTheme('dark')}
            >
              Sombre
            </button>
            <button 
              className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
              onClick={() => setTheme('system')}
            >
              Système
            </button>
          </div>
        </div>
      </section>
      
      <section className="settings-section">
        <h2>Préférences</h2>
        <div className="setting-item">
          <label>Notifications</label>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider"></span>
          </div>
        </div>
        
        <div className="setting-item">
          <label>Langue</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </section>
      
      <section className="settings-section">
        <h2>Gestion des données</h2>
        <div className="setting-actions">
          <button className="btn warning-btn">Exporter mes tâches</button>
          <button className="btn danger-btn">Supprimer toutes les tâches</button>
        </div>
      </section>
    </div>
  );
}

export default Settings;
