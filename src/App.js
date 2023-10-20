import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from '../src/components/Feed'; 
import Profile from '../src/components/Profile'; 
import '../src/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pawfiles</h1>        
        <Switch>
          <Route path="/profile/:petId" component={Profile} />
          <Route exact path="/" component={Feed} /> 
        </Switch>
      </div>
    </Router>
  );
}
export default App;