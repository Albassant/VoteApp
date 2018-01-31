import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './modules/Auth';

import Base from './components/Base.jsx';

import LogoutPage from './components/LogoutPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import RegisterPage from './containers/RegisterPage.jsx';

import HomePage from './containers/HomePage.jsx';
import PollsPage from './containers/PollsPage.jsx';
import NewPollPage from './containers/NewPollPage.jsx';

ReactDOM.render((
  <Router>
    <div>
      <Route component={Base} />
      
      <Route exact path="/" component={HomePage}/>
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
      
      <Route path="/mypolls" component={PollsPage} />
      <Route path="/new" component={NewPollPage} />
      
    </div>
  </Router>
  ), 
  document.getElementById('root')
);
//       