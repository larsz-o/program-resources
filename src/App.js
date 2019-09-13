import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/program/:program"/>
        <Route render={()=> <h1>404: page not found</h1>}/>
      </Switch>
      
    </Router>
  );
}

export default App;
