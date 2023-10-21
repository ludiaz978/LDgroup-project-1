import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Feed from './Feed';
import Pawfile from './Pawfile';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/pawfile/:petId" element={<Pawfile />} />
      </Routes>
    </Router>
  );

}

export default App;