import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import Join from './Join/Join';
import Splash from './Splash/Splash';
import Home from './Home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
           <Route exact path="/welcome" component={Home} />
           <Route exact path="/splash" component={Splash} />
           <Route exact path="/join" component={Join} />
        </Router>
      </div>
    )
  }
}

export default App;
