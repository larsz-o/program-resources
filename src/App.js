import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProgramInfo from './components/ProgramInfo/ProgramInfo';
import ContributeData from './components/ContributeData/ContributeData';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={ContributeData}/>
        <Route path="/program/:program" component ={ProgramInfo}/>
        <Route render={()=> <h1>404: page not found</h1>}/>
      </Switch>
      
    </Router>
  );
}

export default App;
