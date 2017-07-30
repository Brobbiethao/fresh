import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { Router, browserHistory, Route} from 'react-router';
import store from './store/index'

import App from './components/App';
import Splash from './components/Splash/Splash';
import Join from './components/Join/Join';
import Home from './components/Home/Home';




ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route exact path="/welcome" component={Home} />
        <Route exact path="/splash" component={Splash} />
        <Route exact path="/join" component={Join} />
      </Router>
    </Provider>
  , document.getElementById('root')
);
