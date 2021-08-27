import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Body } from './components/Body';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <Router >
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Body}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
