import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './modules/Auth';

import Header from './containers/Header.jsx';

import LogoutPage from './containers/LogoutPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import RegisterPage from './containers/RegisterPage.jsx';

import HomePage from './containers/HomePage.jsx';
import PollsPage from './containers/PollsPage.jsx';
import NewPollPage from './containers/NewPollPage.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './styles';

ReactDOM.render((
  
    <Router>
      <div className="root">
        <Route component={Header} />

        <Route exact path="/" component={HomePage}/> 
        
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  
  ), 
  document.getElementById('root')
);
/*
      <MuiThemeProvider theme={theme}>
       </MuiThemeProvider>
       
       <Route component={Main} />
       
      <Route exact path="/" component={HomePage}/> 
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
      
      <Route path="/mypolls" component={PollsPage} />
      <Route path="/new" component={NewPollPage} />     
*/