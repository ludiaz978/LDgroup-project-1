import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed'


function App() {
  return (
    <div>
      <h3>Profiles of Pets</h3>
      <Header /> {/* Use Header component here */}
      <Feed />   {/* Use Feed component here */}
        {/* You can use PawFile component here if needed */}
    </div>
  );
}

export default App;
