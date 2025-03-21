import React, { useMemo, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import PieChart from '../../components/Charts/PieChart';
import BarChart from '../../components/Charts/BarChart';
import './Statistics.css';

function Statistics() {
  const { todos } = useContext(TodoContext);

  // Calculer les données pour le graphique en camembert (pourcentage de tâches complétées)
  const pieChartData = useMemo(() => {
    const completed = todos.filter(todo => todo.completed).length;
    const pending = todos.length - completed;
    
    return {
      labels: ['Complétées', 'En attente'],
      datasets: [
        {
          data: [completed, pending],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }, [todos]);

  // Compter les tâches par catégorie pour le graphique à barres
  const barChartData = useMemo(() => {
    // Créer un dictionnaire pour compter les tâches par catégorie
    const categoryCounts = {};
    
    todos.forEach(todo => {
      const category = todo.category || 'Non catégorisé';
      if (!categoryCounts[category]) {
        categoryCounts[category] = 0;
      }
      categoryCounts[category]++;
    });
    
    const labels = Object.keys(categoryCounts);
    const data = Object.values(categoryCounts);
    
    return {
      labels,
      datasets: [
        {
          label: 'Nombre de tâches',
          data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  }, [todos]);

  const todosExist = todos.length > 0;

  return (
    <div className="statistics-container">
      <h2>Statistiques de vos tâches</h2>
      
      {todosExist ? (
        <div className="stats-grid">
          <div className="stats-card">
            <h3>Progression des tâches</h3>
            <PieChart data={pieChartData} title="État des tâches" />
          </div>
          
          <div className="stats-card">
            <h3>Tâches par catégorie</h3>
            <BarChart data={barChartData} title="Répartition par catégorie" horizontal={true} />
          </div>
          
          <div className="stats-card wide">
            <h3>Résumé</h3>
            <div className="stats-summary">
              <div className="stat-item">
                <span className="stat-value">{todos.length}</span>
                <span className="stat-label">Total des tâches</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{todos.filter(todo => todo.completed).length}</span>
                <span className="stat-label">Tâches complétées</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{todos.filter(todo => !todo.completed).length}</span>
                <span className="stat-label">Tâches en attente</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-stats">
          <p>Ajoutez des tâches pour voir apparaître des statistiques.</p>
        </div>
      )}
    </div>
  );
}

export default Statistics;
