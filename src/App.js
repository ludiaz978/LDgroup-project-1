import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from '../src/components/Feed'; 
import Pawfile from './components/Pawfile'; 
import '../src/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pawfiles</h1>        
        <Switch>
          <Route path="/Pawfile/:petId" component={Pawfile} />
          <Route exact path="/" component={Feed} /> 
        </Switch>
      </div>
    </Router>
  );
}
export default App;