import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProgramInfo from './components/ProgramInfo/ProgramInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"/>
        <Route path="/program/:program" component ={ProgramInfo}/>
        <Route render={()=> <h1>404: page not found</h1>}/>
      </Switch>
      
    </Router>
  );
}

export default App;
