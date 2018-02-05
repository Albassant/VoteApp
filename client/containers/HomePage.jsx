import React, { PropTypes } from 'react';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';

import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';
import theme from '../styles';

import PollsPage from './PollsPage.jsx';
import LoginPage from './LoginPage.jsx';

const styles = {
  card: {
    margin: 0,
    width: '100%',
    textAlign: 'center'
  },
  actions: {
    justifyContent: 'center',
  },
};

class HomePage extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        { 
          !Auth.isUserAuthenticated() &&
          <LoginPage />
        }
        {
          Auth.isUserAuthenticated() && 
          <PollsPage />
        }
      </div>
    );
  }
  
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);

/*
<MuiThemeProvider theme={theme}>
        <Card className="container text-center">
          <CardTitle title="Welcome to VoteApp!" subtitle="Here you can create your own polls, manage them, share them. And vote on everyone's polls!"/>     
          { !Auth.isUserAuthenticated() && 
            <CardText> But first, you have to <Link to={'/login'}>log in</Link> or <Link to={'/register'}>register</Link></CardText> 
          }
          { Auth.isUserAuthenticated() && 
            <CardActions>
              <Button raised label="New Poll" primary={true} onClick={() => this.props.history.push('/new')} />
              <Button raised label="My Polls" onClick={() => this.props.history.push('/mypolls')} />
            </CardActions> 
          }
        </Card>
      </MuiThemeProvider>
*/