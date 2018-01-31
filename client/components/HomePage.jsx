import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Link, NavLink } from 'react-router-dom';


const HomePage = () => (
  <MuiThemeProvider>
    <Card className="container">
      <CardTitle title="Welcome to VoteApp!" subtitle="Here you can create your own polls, manage them, share them. And vote on everyone's polls!"/>
      <CardText> But first, you have to <Link to={'/login'}>log in</Link> or <Link to={'/register'}>register</Link></CardText>
    </Card>
  </MuiThemeProvider>
);

export default HomePage;

