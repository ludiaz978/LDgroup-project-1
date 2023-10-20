import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from '../src/components/Feed'; 
import Pawfile from './components/Pawfile'; 
import '../src/App.css';

function App() {
  return (
    <Routes>
      <div className="App">
        <h1>Pawfiles</h1>        
          <Route path="/Pawfile/:petId" component={Pawfile} />
          <Route exact path="/" component={Feed} /> 
      </div>
    </Routes>
  );
}
export default App;