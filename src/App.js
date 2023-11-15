import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Feed from './components/Feed';
import Pawfile from './components/Pawfile';
import Sidebar from './components/Sidebar'; 
import PostForm from './components/PostForm';
import petProfiles from './data/petProfiles';


import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [feedItemsWithLikes, setFeedItemsWithLikes] = useState(
    petProfiles.map(pet => ({
      id: pet.id,
      profile: pet,
      comment: pet.comment || 'Random comment',
      userComment: '', /* maybe instead of comment we need to rename this bio or something because it is
                        in the "profile" */
      likeCount: Math.floor(Math.random() * 100), // Generate random like counts
    }))
  );

  const onPostSubmit = (newPost) => {
    const updatedFeedItems = [
      {
        id: feedItemsWithLikes.length + 1, // You will need to ensure this ID is unique
        profile: newPost,
        comment: '',
        userComment: '',
        likeCount: 0,
      },
      ...feedItemsWithLikes,
    ];
    setFeedItemsWithLikes(updatedFeedItems); // Update the state
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <Sidebar />
        <button className="toggle-button" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
        <Routes>
        <Route path="/" element={
            <Feed 
              feedItemsWithLikes={feedItemsWithLikes}
              setFeedItemsWithLikes={setFeedItemsWithLikes}
            />}
          />
          <Route path="/pawfile/:petId" element={<Pawfile />} />
          <Route path="/new-post" element={<PostForm onPostSubmit={onPostSubmit} />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;