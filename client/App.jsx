import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LogoutPage from './containers/LogoutPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import RegisterPage from './containers/RegisterPage.jsx';

import HomePage from './containers/HomePage.jsx';
import PollsPage from './containers/PollsPage.jsx';
import NewPollPage from './containers/NewPollPage.jsx';
import VotingPage from './containers/VotingPage.jsx';


ReactDOM.render((
    <Router>
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/public/polls" render={(props) => <PollsPage {...props} isPublic /> } />
        <Switch>
          <Route path="/polls/new" component={NewPollPage} />
          <Route path="/polls/:id" component={VotingPage} />
          <Route path="/polls" component={PollsPage} />
        </Switch>
      </div>
    </Router>
  ),
  document.getElementById('root')
);

