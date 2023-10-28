import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Feed from './components/Feed';
import Pawfile from './components/Pawfile';
import Sidebar from './components/Sidebar'; 
import PostForm from './components/PostForm';


import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <Sidebar />
        <button className="toggle-button" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/pawfile/:petId" element={<Pawfile />} />
          <Route path="/new-post" element={<PostForm />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;