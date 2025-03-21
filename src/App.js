import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Statistics from './pages/Statistics/Statistics';
import Settings from './pages/Settings/Settings';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import { TodoProvider } from './context/TodoContext';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
