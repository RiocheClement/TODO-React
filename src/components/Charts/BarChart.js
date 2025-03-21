import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrement des éléments nécessaires de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, title, horizontal = false }) => {
  // Configuration des options du graphique
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: horizontal ? 'y' : 'x',
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: title ? true : false,
        text: title || '',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0 // Forcer les valeurs entières
        }
      }
    }
  };

  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
