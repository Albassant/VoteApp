import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './modules/Auth';

import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LogoutPage from './components/LogoutPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import RegisterPage from './containers/RegisterPage.jsx';

import TestPage from './containers/TestPage.jsx';
import PollsPage from './containers/PollsPage.jsx';

ReactDOM.render((
  <Router>
    <div>
      <Route component={Base} />
      
      <Route exact path="/hello" component={TestPage} />
      <Route exact path="/" render={() => Auth.isUserAuthenticated() ? <TestPage/> : <HomePage/>} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
      
     
      
    </div>
  </Router>
  ), 
  document.getElementById('root')
);

// <Route path="/polls" component={PollsPage} />