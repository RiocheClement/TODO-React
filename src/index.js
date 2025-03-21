import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TodoProvider } from './context/TodoContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
