import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

const HomePage = ({ onNewClick, onPollsClick }) => (
  <MuiThemeProvider>
    <Card className="container text-center">
      <CardTitle title="Welcome to VoteApp!" subtitle="Here you can create your own polls, manage them, share them. And vote on everyone's polls!"/>     
      { !Auth.isUserAuthenticated() && 
        <CardText> But first, you have to <Link to={'/login'}>log in</Link> or <Link to={'/register'}>register</Link></CardText> 
      }
      { Auth.isUserAuthenticated() && 
        <CardActions>
          <RaisedButton label="New Poll" primary={true} onClick={onNewClick} />
          <RaisedButton label="My Polls" onClick={onPollsClick} />
        </CardActions> 
      }
    </Card>
  </MuiThemeProvider>
);

HomePage.propTypes = {
  onNewClick: PropTypes.func.isRequired,
  onPollsClick: PropTypes.func.isRequired,
};

export default HomePage;
